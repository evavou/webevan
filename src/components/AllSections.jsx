/*-----------------------------------------------------------------------

Composent principaux des sections de mon site
Ici, toutes les sections definies dans les data sont appeller une par une
Les sections sont ensuite traitées individuelement dans ./sections/SectionContent.jsx

------------------------------------------------------------------------*/
import SectionDivider from './sections/section_items/SectionDivider.jsx';
import SectionContent from './sections/SectionContent';
import { sectionsDataEN } from '../data/data_sections_en.jsx';
import { sectionsDataFR } from '../data/data_sections_fr.jsx';
import './AllSections.css';

const AllSections = ({ language }) => {

  const selectedSectionsData = language === 'en' ? sectionsDataEN : sectionsDataFR;

  return (
    <div className="all-sections-wrapper">
      {selectedSectionsData.map((section, index) => (
        <div 
          key={section.id} 
          id={section.id}
          className="section-wrapper"
          style={{
            '--theme-1': `var(--color-bg-${section.id}-1)`,
            '--theme-2': `var(--color-bg-${section.id}-2)`,
            '--theme-3': `var(--color-bg-${section.id}-3)`,
          }}
        >
          {/* gestion du fond (flip-x une fois sur deux) */}
          <div className="section-bg-container">
            <img
              src={`backgrounds/bg_${section.id}.webp`}
              alt={`background of section ${section.id}`}
              className={`section-bg-img no-select ${index % 2 !== 1 ? 'flip-x' : ''}`}
              draggable="false"
            />
          </div>

          <div className="section-items">
            {/* la barre de transition */}
            <div className="divider-wrapper">
              <SectionDivider text={section.title} />
            </div>
            
            {/* le contenu */}
            <SectionContent 
              id={section.id}
              text={section.text}
              images={section.images.map(img => {
                return { src: `pictures/${img.src}`, desc: img.desc };
              })}
              buttons={section.buttons}
            />
          </div>

        </div>
      ))}
    </div>
  );
};

export default AllSections;