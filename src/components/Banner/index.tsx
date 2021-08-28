import React from 'react';
import bannerDesktop from './images/banner-desktop.jpg';
import bannerMobile from './images/banner-mobile.jpg';
import './index.scss';

function Banner() {
  return (
    <div className="banner">

        <picture>
          <source media="(min-width: 1024px)" srcSet={bannerDesktop} />
          <source media="(min-width: 768px)" srcSet={bannerDesktop} />
          <source media="(min-width: 375px)" srcSet={bannerMobile} />
          <img className="banner__image" src={bannerMobile} alt='banner' />
      </picture>

    </div>
  );
}

export default Banner;
