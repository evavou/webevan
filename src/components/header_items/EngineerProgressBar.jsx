/*-----------------------------------------------------------------------

Composent de la barre de progression,
qui représente la pourcentage actuelle de ma formation d'ingénieur à popo
Aucune intéraction n'est possible.
Le css utilise exclusivement des vw pour ne pas changer de taille par raport au fond

------------------------------------------------------------------------*/
import { useState, useEffect } from 'react';
import './EngineerProgressBar.css';

const EngineerProgressBar = () => {
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
    <div className="progress-rectangle">
      {/* la barre qui contient le texte */}
      <div 
        className="progress-fill" 
        style={{ width: `${percentage}%` }}
      >
        <span className="progress-text no-select">
          {Math.floor(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default EngineerProgressBar;