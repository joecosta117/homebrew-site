import React  from 'react';
import './index.scss';
interface cardProps {
  cardContent?: {
    name: string;
    description: string;
    image: string;
    url: string;
  }
}

function ContentCard({cardContent}: cardProps) {
  return cardContent ? (
    <div className="card">
      <div className="card__image-container"> 
        <img src={cardContent.image} className="card__image-container__image" alt="card" />
      </div>
      <div className="card__content">
        <div className="card__content__title">{cardContent.name}</div>
        <div className="card__content__text">{cardContent.description}</div>
        <button onClick={handleClick} className="card__content__button">Get the PDF</button>
      </div>
    </div>
  ) : (<div></div>)

  function handleClick() {
    cardContent && window.open(cardContent.url, '_blank');
  }
}

export default ContentCard;
