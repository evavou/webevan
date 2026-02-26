/*-----------------------------------------------------------------------

Le composent de la grille de raccourci vers les sections de mon site
Chaque element de cette grille possède une icone pour chaque sections :
  public/icons/icon_${item.id}.png
Or hover, les icons agissent comme des masque et laisse apparaitre le fond
Chaque element a egalement une étiquette qui apparait sur le coté au hover
Cette étiquette est affiché par défaud sur mobile

------------------------------------------------------------------------*/
import './NavigationGrid.css';

// données statiques
const navItems = {
  en: [
    { id: 'about', label: 'About Me', note: 'You should go there first' },
    { id: 'jukebox', label: 'Jukebox', note: 'A cool website' },
    { id: 'vraille', label: 'Vraille', note: 'Reimagining the alphabet' },
    { id: 'schoolfish', label: 'Schoolfish', note: 'Glou glou glou' },
    { id: 'art', label: 'Art', note: 'My messy drawings' },
    { id: 'minecraft', label: 'Minecraft', note: 'So we back in the mine' }
  ],
  fr: [
    { id: 'about', label: 'À propos', note: 'Par ici pour commencer' },
    { id: 'jukebox', label: 'Jukebox', note: 'Un site sympa' },
    { id: 'vraille', label: 'Vraille', note: 'Réinventer l\'alphabet' },
    { id: 'schoolfish', label: 'Banc de poissons', note: 'Glou glou glou' },
    { id: 'art', label: 'Art', note: 'Mes gribouillages' },
    { id: 'minecraft', label: 'Minecraft', note: 'So we back in the mine' }
  ]
};


const NavigationGrid = ({language}) => {

  /* pour handle le raccourci vers la section choisit */
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="nav-grid-wrapper">
      <div className="nav-grid">
        {navItems[language].map((item) => (
          <button 
            key={item.id} 
            className="nav-square-btn"
            onClick={() => handleScrollTo(item.id)}
            aria-label={`Aller à la section ${item.label}`}
          >
            {/* --- ICONE CARRÉE --- */}
            <div className="btn-gradient-border">
             <div 
                className="btn-content nav-icon"
                style={{
                  '--icon-url': `url(icons/icon_${item.id}.png)`
                }}
              />
            </div>

            {/* --- ETIQUETTE (LABEL) --- */}
            <div className="label-container">
              <div className="btn-gradient-border label-border">
                {/* classe 'label-content' pour le texte */}
                <div className="btn-content label-content">
                  <span className="label-text">{item.label}</span>
                  <span className="label-text label-note">{item.note}</span>
                </div>
              </div>
            </div>

          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationGrid;