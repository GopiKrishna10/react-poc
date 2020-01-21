import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormsComponent from './Forms/FormsComponent';
import ReduxComponent from './Redux/ReduxComponent';
import HooksComponent from './Hooks/HooksComponent';
function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <div className="div-list">
            <ul>
              <li className="list-text"><Link to="/">Forms</Link></li>
              <li><Link to="/redux">Redux</Link> </li>
              <li><Link to="/hooks">Hooks</Link> </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/">
              <FormsComponent />
            </Route>
            <Route path="/redux">
              <ReduxComponent />
            </Route>
            <Route path="/hooks">
              <HooksComponent />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
