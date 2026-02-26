/*-----------------------------------------------------------------------

Composent qui affiche le stack et les langages que je connais, dans deux box distinct
Dans chacune des ces boxs, les logos defillent un a un vers la gauche
Une fleche est diponible a droite pour les faire défiler plus vite
Les données sont definis dans data/data_stack_logos.jsx

------------------------------------------------------------------------*/
import { useState, useEffect, useCallback } from 'react';
import './StackLogos.css';
import { languageLogos, stackLogos } from '../../../data/data_stack_logos.jsx';

const LogoTicker = ({ logos, delay = 0 }) => {

  const [isAnimating, setIsAnimating] = useState(false);
  const [tickKey, setTickKey] = useState(0); // pour réinitialiser le chrono au clic de la fleche
  const [items, setItems] = useState(() =>
    [...logos, ...logos].map((logo, i) => ({ ...logo, uniqueId: i }))
  );
  

  //la logique de glissement
  const performNext = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setItems(prevItems => {
        const firstItem = prevItems[0];
        const restOfItems = prevItems.slice(1);
        return [...restOfItems, firstItem];
      });
      setIsAnimating(false);
    }, 300);                    // <--- DUREE DE L'ANIMATION
  }, []);

  //clic de la flèche
  const handleClick = () => {
    if (isAnimating) return; // empêche de tout casser si on clique trop vite
    performNext();
    setTickKey(prev => prev + 1); // 'RAZ' le useEffect ci dessous
  };

  useEffect(() => {
    let interval;

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        performNext();
      }, 4000);                 // <--- TEMPS ENTRE ANIMATIONS
    }, tickKey === 0 ? delay : 0);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, [delay, tickKey, performNext]); // se relance à chaque clic

  return (
    //conteneur global pour mettre la flèche
    <div className="ticker-wrapper">
      <div className="logos-container">
        <div
          className="logos-track"
          style={{
            transform: isAnimating ? 'translateX(calc(-35px - 2.5rem))' : 'translateX(0)',
            transition: isAnimating ? 'transform 0.3s ease-out' : 'none',
          }}
        >
          {items.map((logo) => (
            <img
              key={logo.uniqueId}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="tech-logo no-select"
              draggable="false"
            />
          ))}
        </div>
      </div>
      <button className="next-logo-btn" onClick={handleClick} aria-label="Next logos">
        ❯
      </button>

    </div>
  );
};



const StackLogos = () => {
  return (
    <div className="stack-row">
      <div className="gradient-box stack-box-container">
        <div className="box-content stack-box-content">
          <div className="stack-title">Stack</div>
          <LogoTicker logos={stackLogos} delay={0} /> 
        </div>
      </div>

      <div className="gradient-box stack-box-container">
        <div className="box-content stack-box-content">
          <div className="stack-title">Languages</div>
          <LogoTicker logos={languageLogos} delay={1500} /> 
        </div>
      </div>
    </div>
  );
};

export default StackLogos;