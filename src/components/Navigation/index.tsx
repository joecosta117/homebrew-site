import "./index.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BREAKPOINTS } from "../../utils/useDevice";

function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 41) {
        if (prevScrollPos > currentScrollPos) {
          const nav = document.getElementById("nav");
          if (nav) nav.style.top = "0";
        } else {
          const nav = document.getElementById("nav");
          if (nav) nav.style.top = "-60px";
        }
      }

      setPrevScrollPos(currentScrollPos);
    };
  }, [prevScrollPos]);

  function toggleMobileNav() {
    if (window.innerWidth < BREAKPOINTS.DESKTOP) {
      setIsMobileNavOpen(!isMobileNavOpen);
    }
  }

  function toggleDropdown(event: any) {
    const dropdownType = event.target.dataset.type;

    document
      .querySelectorAll(".navigation__links-container__dropdown")
      .forEach((element: any) => {
        if (element.dataset.type === dropdownType) {
          element.dataset.active === "true"
            ? (element.dataset.active = "false")
            : (element.dataset.active = "true");
        } else {
          element.dataset.active = "false";
        }
      });

    document
      .querySelectorAll(".navigation__links-container__dropdown-arrow")
      .forEach((element: any) => {
        if (element.dataset.type === dropdownType) {
          element.dataset.active === "true"
            ? (element.dataset.active = "false")
            : (element.dataset.active = "true");
        } else {
          element.dataset.active = "false";
        }
      });
  }

  return (
    <div className="navigation" id="nav">
      <div className="navigation__container">
        <div className="navigation__title-container">
          <Link to="/" className="navigation__title-container__title">
            Fanatical DM
          </Link>
        </div>
        <div className="navigation__links" data-is-active={isMobileNavOpen}>
          <div
            className="navigation__links-container"
            data-type="5E"
            onClick={toggleDropdown}
          >
            <div className="navigation__links-container__nav" data-type="5E">
              <div className="navigation__links-container__link" data-type="5E">
                D&D 5E
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="5E"
                data-active="false"
              ></button>
            </div>
            <div
              className="navigation__links-container__dropdown"
              data-type="5E"
              data-active="false"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/5e-classes"
                onClick={toggleMobileNav}
              >
                Classes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/5e-monsters"
                onClick={toggleMobileNav}
              >
                Monsters
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/5e-races"
                onClick={toggleMobileNav}
              >
                Races
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/5e-subclasses"
                onClick={toggleMobileNav}
              >
                Subclasses
              </Link>
            </div>
          </div>

          <div
            className="navigation__links-container"
            data-type="2E"
            onClick={toggleDropdown}
          >
            <div className="navigation__links-container__nav" data-type="2E">
              <div className="navigation__links-container__link" data-type="2E">
                Pathfinder 2E
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="2E"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-type="2E"
              data-active="false"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-ancestries"
                onClick={toggleMobileNav}
              >
                Ancestries
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-archetypes"
                onClick={toggleMobileNav}
              >
                Archetypes
              </Link>
              <Link
                className="navigation__links-container__dropdown__item"
                to="/2e-classes"
                onClick={toggleMobileNav}
              >
                Classes
              </Link>
            </div>
          </div>

          <div
            className="navigation__links-container"
            onClick={toggleDropdown}
            data-type="contact"
          >
            <div
              className="navigation__links-container__nav"
              data-type="contact"
            >
              <div
                className="navigation__links-container__link"
                data-type="contact"
              >
                Contact Me
              </div>
              <button
                className="navigation__links-container__dropdown-arrow"
                data-type="contact"
              ></button>
            </div>

            <div
              className="navigation__links-container__dropdown"
              data-type="contact"
              data-active="false"
            >
              <Link
                className="navigation__links-container__dropdown__item"
                to="/contact"
                onClick={toggleMobileNav}
              >
                Email
              </Link>
              <a
                className="navigation__links-container__dropdown__item"
                href="https://www.reddit.com/u/fanatic66/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit
              </a>
              <a
                className="navigation__links-container__dropdown__item"
                href="https://twitter.com/FanaticalDm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className="navigation__links-container" data-open-mobile="true">
            <div className="navigation__links-container__nav">
              <a
                className="navigation__links-container__link"
                href="https://www.patreon.com/FanaticalDM"
                target="_blank"
                rel="noopener noreferrer"
                data-type="patreon"
              >
                Support on Patreon
              </a>
            </div>
          </div>
        </div>
        <div
          className="navigation__mobile-menu"
          onClick={toggleMobileNav}
          data-is-active={isMobileNavOpen}
        >
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
          <span className="mobile-menu-icon"></span>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
