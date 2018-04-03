import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import subFrame from './components/SubFrame';
import App from './components/App';
 
 

render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
        <IndexRoute component={subFrame}/>
        
    </Route>
  </Router>
  , document.getElementById('app'));