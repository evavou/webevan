/*-----------------------------------------------------------------------

Composent des boutons utilisée un peu partout sur mon site
Ils sont principalement appeller directement dans les datas ou dans mon panel de contact
Les boutons peuvent être de différents types :
  -isExternal || isPdf : on l'ouvre dans un nouvel onglet
  -onClick (pour le boutons de contact)
  -isWip, boutons d'elements qui sont en work in progress

------------------------------------------------------------------------*/
import { useState } from 'react';
import './CoolButton.css';

const CoolButton = ({ children, href, isExternal, isPdf, isWip, onClick }) => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  // on regarde où est la souris pour l'affichage du tooltip
  const handleMouseMove = (e) => {
    if (isWip) {
      setCoords({ x: e.clientX, y: e.clientY });
    }
  };

  // on regarde où est la souris pour l'affichage du tooltip
  const interactionProps = isWip ? {
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setShowTooltip(true),
    onMouseLeave: () => setShowTooltip(false)
  } : {};

  // la className de notre bouton
  const btnClass = `btn-main ${isWip ? 'btn-wip' : 'btn-working'}`;

  // on vérifie s'il faudra l'ouvrir dans un nouvel onglet
  const openInNewTab = isExternal || isPdf;

  return (
    <>
      <a 
        className={btnClass}
        href={href}
        onClick={onClick}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        style={onClick ? { cursor: 'pointer' } : undefined}
        {...interactionProps}
      >
        {children}
      </a>

      {isWip && showTooltip && (
        <div 
          className="wip-tooltip" 
          style={{ left: `${coords.x + 15}px`, top: `${coords.y + 15}px` }}
        >
          work in progress !
        </div>
      )}
    </>
  );
};

export default CoolButton;