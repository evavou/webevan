/*-----------------------------------------------------------------------

Composent qui gère l'affichage des images des sections
Description qui s'affiche en bas a gauche si hover
Possibilité de cliquer dessus pour agrandir l'image,
puis de zoomer a un endroit spécifique en recliquant dessus
Lorque l'image est agrandit, la description s'affiche en dessous

------------------------------------------------------------------------*/
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageGallery.css';

const ImageGallery = ({ src, alt, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('50% 50%');

  // --- fonction de l'ouverture de l'image ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false); // réinitialise le zoom si on ferme la lightbox
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // --- fonction du zoom ---
  const handleImageClick = (e) => {
    e.stopPropagation(); // empêche le clic de fermer la lightbox /!\

    if (isZoomed) {
      // si déjà zoomé, dézoom
      setIsZoomed(false);
    } else {
      const rect = e.target.getBoundingClientRect(); // la taille et position de l'image à l'écran
      const x = ((e.clientX - rect.left) / rect.width) * 100; // position X en %
      const y = ((e.clientY - rect.top) / rect.height) * 100; // position Y en %
      
      setZoomOrigin(`${x}% ${y}%`); // déplace le point d'origine du zoom
      setIsZoomed(true); // zoom
    }
  };

return (
    <>
      <div className="gallery-container" onClick={() => setIsOpen(true)}>
        <img 
          src={src} 
          alt={alt || "Project view"} 
          className="gallery-main-image no-select" 
          draggable="false" 
        />
        {desc && (
          <div className="hover-description">
            {desc}
          </div>
        )}
      </div>

      {isOpen && createPortal(
        <div className="global-overlay" onClick={() => setIsOpen(false)}>
          <div className="overlay-content">
            <img 
              src={src} 
              alt="Enlarged view" 
              className="enlarged-image no-select" 
              draggable="false"
              onClick={handleImageClick} 
              style={{
                transformOrigin: zoomOrigin,
                transform: isZoomed ? 'scale(2.5)' : 'scale(1)', 
                cursor: isZoomed ? 'zoom-out' : 'zoom-in' 
              }}
            />
            {!isZoomed && desc && (
              <p className="enlarged-description" style={{ color: '#ffffff99', letterSpacing: '1px', marginTop: '10px' }}>
                {desc}
              </p>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ImageGallery;