import './index.scss';
import React from 'react'; 

function Navigation() {
  function toggleDropdown(event: React.ChangeEvent<HTMLInputElement>) {
    const dropdownType = event.target.dataset.type;

    document
      .querySelectorAll('.navigation__links-container__dropdown')
        .forEach((element: object) => {
          if (element.dataset.type === dropdownType) {
            element.dataset.isActive === 'true'
              ? (element.dataset.isActive = 'false')
              : (element.dataset.isActive = 'true');
          } else {
            element.dataset.isActive = 'false';
          }
        });
  }
  return (
    <div className="navigation">
      <div className="navigation__container">
        <div className="navigation__title-container">
          <span className="navigation__title-container__title">Joe Costa's Homebrew</span>
        </div>
        <div className="navigation__links">
          <div className="navigation__links-container" data-type="5E" onClick={toggleDropdown}>
            <a className="navigation__links-container__link" data-type="5E" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">D&D 5E</a>
            <div className="navigation__links-container__dropdown" data-type="5E">
              <a className="navigation__links-container__dropdown__item" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Classes</a>
              <a className="navigation__links-container__dropdown__item" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Subclass</a>
              <a className="navigation__links-container__dropdown__item" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Races</a>
            </div>
          </div>

          <div className="navigation__links-container" data-type="2E" onClick={toggleDropdown}>
            <a className="navigation__links-container__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" data-type="2E">Pathfinder 2E</a>
            <div className="navigation__links-container__dropdown" data-type="2E">
              <a className="navigation__links-container__dropdown__item" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Classes</a>
              <a className="navigation__links-container__dropdown__item" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Archetypes</a>
              <a className="navigation__links-container__dropdown__item" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Ancestries</a>
            </div>
          </div>

          <div className="navigation__links-container">
            <a className="navigation__links-container__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Contact Me</a>
          </div>
          
          <div className="navigation__links-container">
            <a className="navigation__links-container__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" data-type="patreon">Support on Patreon</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
