import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './compotnents/about/About';
import Clients from './compotnents/clients/Clients';
import Signup from './compotnents/signup/Signup';
import Navigation from './compotnents/navigation/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
