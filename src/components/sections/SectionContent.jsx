/*-----------------------------------------------------------------------

Composent qui gère l'affichage du contenu d'une sections (donc un projet)
Le contenu est defini dans les deux fichier data/data_section_en et _fr
Dans la colonne gauche :
  -la boite de texte principale, avec titre (h3) et paragraphe (p)
  -appelle a StackLogos mais uniquement pour la premiere section #about
Dans la colonne de droite :
  -une ou plusieurs image affiché grace a ImageGallery
  -un ou plusieurs boutons

------------------------------------------------------------------------*/
import './SectionContent.css';
import StackLogos from './section_items/StackLogos';
import ImageGallery from './section_items/ImageGallery';

const SectionContent = ({ id, text, images, buttons }) => {
  return (
    <div className="split-card-container">
      
      {/* --- COLONNE GAUCHE - TEXT --- */}
      <div className="both-column left-column">
        
        {/* texte */}
        <div className="gradient-box text-side">
          <div className="box-content text-content">
            {text}
          </div>
        </div>

        {/* on affiche ça que dans la section #about */}
        {id === 'about' && (
          <div className="stack-wrapper">
            <StackLogos />
          </div>
        )}
      </div>

      {/* --- COLONNE DROITE - IMAGE & BOUTONS --- */}
      <div className="both-column right-column">
        {/* toutes les images */}
        {images.map((imgObj, index) => (
          <div key={index} className="gradient-box">
            <div className="box-content">
              <ImageGallery src={imgObj.src} alt={`Project ${index}`} desc={imgObj.desc} />
            </div>
          </div>
        ))}

        {/* boutons */}
        <div className="buttons-container">
          {buttons}
        </div>
      </div>

    </div>
  );
};

export default SectionContent;