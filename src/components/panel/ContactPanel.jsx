/*-----------------------------------------------------------------------

Composent pour l'affichage du panneau des contacts avec :
  -liens vers mes réseaux a gauche
  -envoie d'un mail depuis le site avec web3forms
->ce panel est accessible grace a une signal 'open-contact'

------------------------------------------------------------------------*/
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CoolButton from '../buttons/CoolButton.jsx';
import { dataLinks } from '../../data/data_links.jsx';
import './ContactPanel.css';

// --- link socials ---
const socialLinks = [
  { name: "Discord ↗", username: "Evavou #2864", url: dataLinks.discord },
  { name: "LinkedIn ↗", username: "Evan Lancry", url: dataLinks.linkedin },
  { name: "GitHub ↗", username: "evavou", url: dataLinks.github }
];

const ContactPanel = ({ language }) => {

  // --- state ---
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ email: false, subject: false, message: false });

  // --- gère l'ouverture du panel ---
  useEffect(() => {
    const handleOpenSignal = () => setIsOpen(true);
    window.addEventListener('open-contact', handleOpenSignal);

    return () => window.removeEventListener('open-contact', handleOpenSignal);
  }, []);

  // --- gère les erreurs (je crois) ---
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) {
      setErrors({ email: false, subject: false, message: false });
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // --- gère les envoie de mail ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // trois booléens pour savoir si qq chose est vide
    const newErrors = {
      email: email.trim() === '',
      subject: subject.trim() === '',
      message: message.trim() === ''
    };

    setErrors(newErrors);

    // on renvoie si erreur qq part
    if (newErrors.email || newErrors.subject || newErrors.message) {
      return;
    }

    // sinon en envoie le mail
    setStatus('sending');
    const formData = new FormData();
    formData.append("access_key", "30c1e693-e0a4-4484-939c-6a24f5116675");
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmail(''); setSubject(''); setMessage('');
        setTimeout(() => { setIsOpen(false); setStatus(''); }, 2000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };




  // si le panel est fermé, on rend rien du tout
  if (!isOpen) return null;

  // sinon on créer le panel
  return createPortal(
    <div className="global-overlay" onClick={() => setIsOpen(false)}>
      <div className="gradient-box contact-modal" onClick={(e) => e.stopPropagation()}>
        <div className="box-content contact-inner">
  
          <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          <h2 className="contact-title-primary">Contact</h2>

          <div className="contact-split">
            {/* colonne gauche - liens réseaux */}
            <div className="contact-col">
              <h3 className="contact-title-secondary">
                {language === 'en' ? 'Socials' : 'Réseaux'}
              </h3>
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="main-box social-box">
                  <span>{link.name}</span>
                  <span className="social-username">{link.username}</span>
                </a>
              ))}
            </div>

            <div className="contact-separator"></div>

            {/* colonne droite - envoyer un mail */}
            <form className="contact-col" onSubmit={handleSubmit}>
              <div className="title-row">
                <h3 className="contact-title-secondary">
                  {language === 'en' ? 'Send me a mail' : 'M\'écrire un mail'}
                </h3>
                <span className="contact-mail">{dataLinks.contact_email}</span>
              </div>
              {/* your email */}
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email address' : 'Votre adresse mail'}
                className={`main-box mail-text-input ${errors.email ? 'input-error' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value); setErrors(prev => ({ ...prev, email: false }));
                }}
              />
              {/* subject */}
              <input
                type="text"
                placeholder={language === 'en' ? 'Subject' : 'Objet'}
                className={`main-box mail-text-input ${errors.subject ? 'input-error' : ''}`}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value); setErrors(prev => ({ ...prev, subject: false }));
                }}
              />
              <textarea
                placeholder="Message..."
                rows="6"
                className={`main-box mail-text-input vertical-resize ${errors.message ? 'input-error' : ''}`}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setErrors(prev => ({ ...prev, message: false }));
                }}
              />

              <div style={{ display: 'contents' }}>
                {status === '' &&
                  <span onClick={handleSubmit}>
                    <CoolButton>{language === 'en' ? 'Send' : 'Envoyer'}</CoolButton>
                  </span>
                }
                {status === 'sending' &&
                  <span style={{ opacity: 0.5 }}>
                    <CoolButton>{language === 'en' ? 'Sending...' : 'Envoi en cours...'}</CoolButton>
                  </span>
                }
                {status === 'success' &&
                  <span>
                    <CoolButton>{language === 'en' ? 'Message Sent!' : 'Message envoyé!'}</CoolButton>
                  </span>
                }
                {status === 'error' &&
                  <span onClick={handleSubmit}>
                    <CoolButton>{language === 'en' ? 'Error. Try again?' : 'Erreur. Réessayer ?'}</CoolButton>
                  </span>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactPanel;