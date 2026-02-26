/*-----------------------------------------------------------------------

Le composent de la nav bar de mon site
Pas de fond, en haut a droite du site
Inclue :
  -language : possibilité de switcher entre français et anglais
  -cv : raccourci pour télécharger mon cv depuis l'accueil
  -contact : ouvertur du PanelContact.jsx avec l'event 'open-contact'

------------------------------------------------------------------------*/
import './NavBar.css';
import { dataLinks } from '../../data/data_links.jsx';

const NavBar = ({ language, toggleLanguage }) => {
  
  // fonction qui envoie le signal pour ouvrir le panel de contact
  const openContactModal = (e) => {
    e.preventDefault(); 
    window.dispatchEvent(new Event('open-contact'));
  };

  return (
    <div className="nav-overlay">
       <ul className="nav nav-container"> 
        {/* --- language --- */}
        <li className="nav-item">
          <a 
            className="nav-link"
            href="#" 
            onClick={toggleLanguage}
            data-text={language === 'en' ? 'Français' : 'English'}
          >
            {language === 'en' ? 'Français' : 'English'}
          </a>
        </li>
        {/* --- cv --- */}
        <li className="nav-item">
          <a
            className="nav-link"
            href={dataLinks.resume}
            data-text="CV"
            target="_blank" 
            rel="noopener noreferrer" 
          >
            CV
          </a>
        </li>
        {/* --- contact --- */}
        <li className="nav-item">
          <a 
            className="nav-link" 
            href="#" 
            onClick={openContactModal} 
            data-text="Contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;