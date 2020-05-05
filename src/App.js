import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import NavExample from "./views/navbar";
import Completeids from "./views/completeids";
import Incompleteids from "./views/incompleteids";
import Home from "./views/home";

function App() {
  return (
    <Router>
             <div>
             <Route exact path="/" component={Home} />

              <Switch>

              <Route exact path="/completeids" component={Completeids} />
              <Route path="/incompleteids" component={Incompleteids} />

              </Switch>
            </div>
         </Router>



  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>*/
  );
}

export default App;
