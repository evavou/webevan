/*-----------------------------------------------------------------------

Composent qui affiche la barre de transition entre les sections
Le texte à l'intérieur se deplace lentement vers la droite

------------------------------------------------------------------------*/
import './SectionDivider.css';

const SectionDivider = ({ text }) => {
  const repeatedText = Array(30).fill(text);

  const speedFactor = 30; 

  const calculatedDuration = (text.length * speedFactor);

  return (
    <div className="divider-container">
      {/* ligne du haut */}
      <div className="section-divider-line"></div>
      
      {/* zone du texte défilant */}
      <div className="section-divider-text">
        <div 
          className="marquee-track" 
          style={{ animationDuration: `${calculatedDuration}s` }}
        >
          {repeatedText.map((item, index) => (
            <span key={index} className="divider-text">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ligne du bas */}
      <div className="section-divider-line"></div>
    </div>
  );
};

export default SectionDivider;