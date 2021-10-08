import React from 'react';
import CardContainer from '../../components/CardContainer';
import { useLocation } from 'react-router-dom';
import contentData, { contentType } from './data';
import './index.scss';
import Banner from '../../components/Banner';

function ContentPage() {
  const location = useLocation();
  const system = location.pathname.slice(1, 3) === '5e' ? 'dnd' : 'pf'
  const pageType: keyof contentType | string = location.pathname.slice(4) === 'magic-items' ? 'items' : location.pathname.slice(4);
  const systemData: contentType = contentData[system];
  // @ts-ignore
  const pageData = systemData[pageType];
  const pageTitle = pageType.charAt(0).toUpperCase() + pageType.slice(1);

  return (
    <div className="content-page">
      <div className="content-page__content">
        <Banner />
        <div className="content-page__content__title">{pageTitle}</div>
        <CardContainer cardsData={pageData} />
      </div>
    </div>
  );
}

export default ContentPage;
