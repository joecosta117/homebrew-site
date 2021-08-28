import React from 'react';
import Swordmage from '../../assets/swordmage2.jpg';
import './index.scss';

function ContentCard() {
  return (
    <div className="card">
      <div className="card__image-container"> 
        <img src={Swordmage} className="card__image-container__image" alt="card" />
      </div>
      <div className="card__content">
        <div className="card__content__title">Swordmage</div>
        <div className="card__content__text">Play as a spellsword, an arcane warrior that blends magic with their attacks.</div>
        <ul className="card__content__text-list">
          <li>10 Subclasses from the elemental bending Elementalist to the time stopping Chronomancer</li>
          <li>30+ New Spells</li>
          <li>Alternative class features, a new feat, and new magic item</li>
        </ul>
        <button className="card__content__button">Get the PDF</button>
      </div>
    </div>
  );
}

export default ContentCard;
