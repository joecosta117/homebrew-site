import React from 'react';
import bannerDesktop from './images/banner-desktop.jpg';

function Banner() {
  // const imgUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79810b67-a1a2-454c-bb8d-6d076cf4850f/depqp2w-40064f7d-0a35-40ac-9a59-caba61b6fff8.jpg/v1/fill/w_1024,h_285,q_75,strp/compilation_desktop_by_joecosta117_depqp2w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mjg1IiwicGF0aCI6IlwvZlwvNzk4MTBiNjctYTFhMi00NTRjLWJiOGQtNmQwNzZjZjQ4NTBmXC9kZXBxcDJ3LTQwMDY0ZjdkLTBhMzUtNDBhYy05YTU5LWNhYmE2MWI2ZmZmOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yyXOK2Qug2A6Hig3hHiOuZuakqeIC397_VR-sC6VSKs';


  return (
    <div className="banner">
      <div className="banner__image-container">
        {/*TODO: make tablet and mobile versions. mobile goes in default img tag*/}
        <picture>
          <source media="(min-width: 1024px)" srcSet={bannerDesktop} />
          <source media="(min-width: 768px)" srcSet={bannerDesktop} />
          <source media="(min-width: 375px)" srcSet={bannerDesktop} />
          <img className="banner__image-container__image" src={bannerDesktop} alt='banner' />
      </picture>
      </div>
    </div>
  );
}

export default Banner;
