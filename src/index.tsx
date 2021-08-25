import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
