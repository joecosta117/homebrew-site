import React from 'react';
import './index.scss';

function ThreePanels() {
  return (
    <div className="three-panels">
      <div className="three-panels__section">
        <div className="three-panels__section__title">D&D 5E Content</div>
        <div className="three-panels__section__section">New Classes</div>
        <div className="three-panels__section__section">New Subclasses</div>
        <div className="three-panels__section__section">New Races</div>
        <div className="three-panels__section__section">New Monsters</div>
      </div>

      <div className="three-panels__section">
        <div className="three-panels__section__title">Fanatical DM's Patreon</div>
        <div className="three-panels__section__section">Join the Patreon to Support Future Homebrew!</div>
        <button className="three-panels__section__button">Support on Patreon</button>
      </div>
      
      <div className="three-panels__section">
        <div className="three-panels__section__title">Pathinder 2E Content</div>
        <div className="three-panels__section__section">New Classes</div>
        <div className="three-panels__section__section">New Ancestries</div>
      </div>
    </div>
  );
}

export default ThreePanels;
