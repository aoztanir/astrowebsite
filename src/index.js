import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import Logout from './Logout.js';
import * as serviceWorker from './serviceWorker';

import './App.css';
import './assets/scss/style.scss';
if (module.hot) {
  module.hot.accept();
}
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
          <Route path="/">
          <App />
          </Route>
        </Switch>
   
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
