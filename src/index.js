import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import ROUTES from "./conts/routes"
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

import $ from 'jquery'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route pathe={ROUTES.home} exact component={Home} />
              <Route pathe={ROUTES.about} component={About} />
              <Route pathe={ROUTES.contact} component={Contact} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

