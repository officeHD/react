import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import User from './components/User';
import App from './components/App';
 
render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
        <IndexRoute component={User}/>
       
    </Route>
  </Router>
  , document.getElementById('app'));