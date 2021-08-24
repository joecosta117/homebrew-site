import React from 'react';
import './index.scss';

function ThreePanels() {
  return (
    <div className="three-panels">
      <div className="three-panels__section">
        <div className="three-panels__section__main-title">Joe's D&D 5E Content</div>
        <div className="three-panels__section__section-title">New Class</div>
        <div className="three-panels__section__section-description">Swordmage</div>
        <div className="three-panels__section__section-title">X Subclasses</div>
        <div className="three-panels__section__section-description">Covering most classes</div>
        <div className="three-panels__section__section-title">New Races</div>
        <div className="three-panels__section__section-description">Revised Dragonborn and new Tiefling options</div>
        <div className="three-panels__section__section-title">New Monsters</div>
      </div>

      <div className="three-panels__section">
        <div className="three-panels__section__main-title">Joe's Patreon</div>
        <div>Join the Patreon to Support Future Homebrew!</div>
        <button>Patreon</button>
      </div>
      
      <div className="three-panels__section">
        <div className="three-panels__section__main-title">Joe's Pathinder 5E Content</div>
        <div className="three-panels__section__section-title">New Classes</div>
        <div className="three-panels__section__section-description">Avenger and Warlord</div>
        <div className="three-panels__section__section-title">3 Archetypes</div>
        <div className="three-panels__section__section-description">Chronurgist, Echo Knight, and Graviturgist</div>
        <div className="three-panels__section__section-title">New Ancestries</div>
        <div className="three-panels__section__section-description">Dragonborn and Warforged</div>
        <div className="three-panels__section__section-title">New Spells</div>
      </div>
    </div>
  );
}

export default ThreePanels;
