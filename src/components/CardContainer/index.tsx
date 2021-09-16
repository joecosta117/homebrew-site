import React  from 'react';
import ContentCard from '../../components/ContentCard';
import './index.scss';

interface cardsContainerProps {
  cardsData: any;
}

function CardContainer({ cardsData }: cardsContainerProps) {
  return (
    <div className="card-container">
      {cardsData.map((card: any, index: number) => (
        <ContentCard cardContent={card} key={index} />
      ))}
    </div>
  );
}

export default CardContainer;
