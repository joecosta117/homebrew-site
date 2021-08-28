import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import DndClasses from './pages/5eClasses';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dnd-classes" component={DndClasses} />
          {/* <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/dnd-classes" component={withRouter(DndClasses)} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
