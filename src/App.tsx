import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContentPage from './pages/ContentPage';
import SubclassesPage from './pages/SubclassesPage';
import EmailPage from './pages/EmailPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/5e-classes" component={ContentPage} />
          <Route exact path="/5e-monsters" component={ContentPage} />
          <Route exact path="/5e-subclasses" component={SubclassesPage} />
          <Route exact path="/5e-races" component={ContentPage} />
          <Route exact path="/2e-ancestries" component={ContentPage} />
          <Route exact path="/2e-classes" component={ContentPage} />
          <Route exact path="/contact" component={EmailPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
