/*-----------------------------------------------------------------------

Composant qui gère le premier plan (overlay) sur l'image principale.
Il contient :
  - L'image PNG découpée (pour l'optimisation du fond)
  - La barre de progression (pourcentage de la formation d'ingénieur)
Les espacements se gèrent facilement dans le CSS via Flexbox.

------------------------------------------------------------------------*/
import { useState, useEffect } from 'react';
import './BackgroundOverlay.css';

const BackgroundOverlay = ( {language} ) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // définir les dates
    const startDate = new Date('2025-09-01').getTime();
    const endDate = new Date('2028-09-01').getTime();
    const now = new Date().getTime();

    // la durée totale et le temps écoulé
    const totalDuration = endDate - startDate;
    const elapsed = now - startDate;

    // le pourcentage
    let calcPercentage = (elapsed / totalDuration) * 100;
    calcPercentage = Math.max(0, Math.min(100, calcPercentage));

    setPercentage(calcPercentage);
  }, []);

  return (
    <div className="overlay-container">
      
      {/* --- L'IMAGE AU DESSUS --- */}
      {/* Remplace 'ton_image.png' par le vrai nom de ton fichier découpé */}
      <img 
        src={`/backgrounds/texts/bg_text_${language}.png`} 
        alt="text overlay" 
        className="overlay-image no-select" 
        draggable="false"
      />

      {/* --- LA BARRE DE PROGRESSION --- */}
      <div className="progress-rectangle">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        >
          <span className="progress-text no-select">
            {Math.floor(percentage)}%
          </span>
        </div>
      </div>

    </div>
  );
};

export default BackgroundOverlay;