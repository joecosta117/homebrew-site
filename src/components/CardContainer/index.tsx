import React from 'react';
import ContentCard from '../../components/ContentCard';
import './index.scss';

function CardContainer() {
  return (
    <div className="card-container">
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  );
}

export default CardContainer;
