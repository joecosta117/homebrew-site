import './index.scss';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <a className="footer__links__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Home</a>
          <a className="footer__links__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Feedback</a>
          <a className="footer__links__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Reddit</a>
          <a className="footer__links__link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
        <div className="footer__patreon">
          <div className="footer__patreon__description">Made possible by your monthly support</div>
          <button className="footer__patreon__button">Support on Patreon</button>
        </div>
      </div>
    </div>
  )
}

export default Footer;
