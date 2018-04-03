import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Companies from './components/Companies';
 

import App from './components/App';
const introduce = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/introduce').default);
    }, 'introduce');
}
 

render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
        <IndexRoute component={Companies}/>
        <Route path="/introduce" getComponent={introduce}/>
    </Route>
  </Router>
  , document.getElementById('app'));