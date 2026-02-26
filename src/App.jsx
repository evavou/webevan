/*-----------------------------------------------------------------------

Composent mère de mon site
Appels a tous mes composent principaux :
  -image principale en fond
  -barre de progression par dessus
  -grille de navigation vers mes projets
  -toutes mes sections de chacun de mes projets
  -barre de navigation en haut a droite
  -le panneau de contacts (qui s'affiche seulement si appeller)

------------------------------------------------------------------------*/
import { useState } from 'react'
import './App.css';
import EngineerProgressBar from './components/header_items/EngineerProgressBar';
import NavigationGrid from './components/header_items/NavigationGrid';
import NavBar from './components/header_items/NavBar'
import ContactPanel from './components/panel/ContactPanel';
import AllSections from './components/AllSections';

function App() {

  const [language, setLanguage] = useState('en');

  // fonction pour changer la langue
  const toggleLanguage = (e) => {
    e.preventDefault(); // empêche la page de remonter tout en haut
    setLanguage(language === 'en' ? 'fr' : 'en');
  };


  return (
    <>     
      <div className="bg-container">
        
        {/* image de fond principale */}
        <img
          src={`backgrounds/bg_main_${language}.png`}
          alt="main background"
          className="main-bg" 
          draggable="false"
        />

        {/* barre ingénieur */}
        <EngineerProgressBar />

        {/* grille de navigation */}
        <NavigationGrid language={language} />

        {/* toutes les sections */}
        <AllSections language={language} />

        {/* navbar */}
        <NavBar language={language} toggleLanguage={toggleLanguage} />

        {/* le panel de contact */}
        <ContactPanel language={language} />
      </div>
    </>
  )
}

export default App