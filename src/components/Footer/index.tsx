import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link className="footer__links__link" to="/">Home</Link>
          <a className="footer__links__link" href="https://www.reddit.com/r/FanaticalDM/" target="_blank" rel="noopener noreferrer">Reddit</a>
          <Link className="footer__links__link" to="/contact">Email</Link>
        </div>
        
        <div className="footer__patreon">
          <div className="footer__patreon__description">Made possible by your monthly support</div>
          <button className="footer__patreon__button">Support on Patreon</button>
        </div>

        <div className="footer__disclaimer">
          <div className="footer__disclaimer__text">All images used for the site or Patreon are property of Fanatical DM or Wizards of the Coast.</div>
          <div className="footer__disclaimer__text">Credits for art used in documents is attributed in documents as appropriate.</div>
          <div className="footer__disclaimer__text">All content is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards of the Coast LLC or Paizo Publishing, LLC. D&D and all associated materials are property of Wizards of the Coast. Pathfinder and all associated materials are property of Paizo Publishing.</div>
        </div>
      </div> 
    </div>
  )
}

export default Footer;
