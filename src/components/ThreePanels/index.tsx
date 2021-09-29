import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function ThreePanels() {
  function redirect() {
    window.open('https://www.patreon.com/FanaticalDM', '_blank')
  }
  
  return (
    <div className="three-panels">
      <div className="three-panels__section">
        <div className="three-panels__section__title">D&D 5E Content</div>
        <Link className="three-panels__section__link" to="/5e-classes">New Classes</Link>
        <Link className="three-panels__section__link" to="/5e-subclasses">New Subclasses</Link>
        <Link className="three-panels__section__link" to="/5e-races">New Races</Link>
        <Link className="three-panels__section__link" to="/5e-monsters">New Monsters</Link>
      </div>

      <div className="three-panels__section">
        <div className="three-panels__section__title">Fanatical DM's Patreon</div>
        <div className="three-panels__section__section">Join the Patreon to Support Future Homebrew!</div>
        <button className="three-panels__section__button" onClick={redirect}>Support on Patreon</button>
      </div>
      
      <div className="three-panels__section">
        <div className="three-panels__section__title">Pathinder 2E Content</div>
        <Link className="three-panels__section__link" to="/2e-classes">New Classes</Link>
        <Link className="three-panels__section__link" to="/2e-archetypes">New Archetypes</Link>
        <Link className="three-panels__section__link" to="/2e-ancestries">New Ancestries</Link>
      </div>
    </div>
  );
}

export default ThreePanels;
