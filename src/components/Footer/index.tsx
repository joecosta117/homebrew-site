import "./index.scss";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  // function redirect() {
  //   window.open('https://www.patreon.com/FanaticalDM', '_blank')
  // }

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__links">
          <Link className="footer__links__link" to="/">
            Home
          </Link>
          <Link className="footer__links__link" to="/contact">
            Email
          </Link>
          <a
            className="footer__links__link"
            href="https://www.reddit.com/u/fanatic66/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>
          <a
            className="footer__links__link"
            href="https://twitter.com/FanaticalDm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        {/* TODO: add back if patreon relaunched */}
        {/* <div className="footer__patreon">
          <div className="footer__patreon__description">
            Made possible by your monthly support
          </div>
          <button className="footer__patreon__button" onClick={redirect}>
            Support on Patreon
          </button>
        </div> */}

        <div className="footer__disclaimer">
          {/* TODO: add back and replace other if patreon relaunched */}
          {/* <div className="footer__disclaimer__text">
            All images used for the site or Patreon are property of Fanatical DM
            or Wizards of the Coast.
          </div> */}
          <div className="footer__disclaimer__text">
            All images used for the site are property of Fanatical DM or Wizards
            of the Coast.
          </div>
          <div className="footer__disclaimer__text">
            Credits for art used in documents is attributed in documents as
            appropriate.
          </div>
          <div className="footer__disclaimer__text">
            All content is unofficial Fan Content permitted under the Fan
            Content Policy. Not approved/endorsed by Wizards of the Coast LLC or
            Paizo Publishing, LLC. D&D and all associated materials are property
            of Wizards of the Coast. Pathfinder and all associated materials are
            property of Paizo Publishing.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
