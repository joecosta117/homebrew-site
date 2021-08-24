import React from 'react';
import './index.scss';
import Navigation from '../../components/Navigation';
import Banner from '../../components/Banner';
import IntroText from '../../components/IntroText';
import ThreePanels from '../../components/ThreePanels';

function App() {
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <IntroText />
      <ThreePanels />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
