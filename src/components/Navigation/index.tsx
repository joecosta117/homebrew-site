import "./index.scss";
import React from 'react'; 

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__title-container">
        <span>Joe Costa's Homebrew</span>
      </div>
      <div className="navigation__links">
        <span>D&D 5E</span>
        <span>Pathfinder 2E</span>
        <span>Contact Me</span>
        <span>Patreon</span>
      </div>
    </div>
  );
}

export default Navigation;
