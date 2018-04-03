import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Introduce from './components/Introduce';
import App from './components/App';


const sharePage = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/SharePage').default);
    }, 'sharePage');
}
const term = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Term').default);
    }, 'term');
}
render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
        <IndexRoute component={Introduce}/>
       <Route path="/share" getComponent={sharePage}/>
       <Route path="/term" getComponent={term}/>
    </Route>
  </Router>
  , document.getElementById('app'));