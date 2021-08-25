import React from 'react';
import './index.scss';
import Banner from '../../components/Banner';
import IntroText from '../../components/IntroText';
import ThreePanels from '../../components/ThreePanels';

function App() {
  return (
    <div className="home">
      <div className="home__content">
        <Banner />
        <IntroText />
        <ThreePanels />
      </div>
    </div>
  );
}

export default App;
