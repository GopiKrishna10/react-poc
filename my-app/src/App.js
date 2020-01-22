import React from 'react';
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
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from './Redux/reducer';
import rootSaga from './Redux/sagas';

function App() {

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);

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
              <Provider store={store}>
                <ReduxComponent />
              </Provider>
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
