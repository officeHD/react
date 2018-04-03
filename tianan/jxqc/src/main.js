import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Introduce from './components/Introduce';
import App from './components/App';
 
const subFrame = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/SubFrame').default);
    }, 'subFrame');
}
const insure = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Insure').default);
    }, 'insure');
}
 
const notice = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Notice').default);
    }, 'notice');
}
const order = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Order').default);
    }, 'order');
}
const pay = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Pay').default);
    }, 'pay');
}
const health = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Health').default);
    }, 'health');
}
 const result = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Result').default);
    }, 'result');
}
 const banksupport = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Banksupport').default);
    }, 'banksupport');
}

render(
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
        <IndexRoute component={Introduce}/>
        <Route path="/subFrame" getComponent={subFrame}/>
        <Route path="/notice" getComponent={notice}/>
        <Route path="/insure" getComponent={insure}/>
        <Route path="/health" getComponent={health}/>
        <Route path="/order" getComponent={order}/>
        <Route path="/pay" getComponent={pay}/>
        <Route path="/banksupport" getComponent={banksupport}/>
        <Route path="/result" getComponent={result}/>
        
    </Route>
  </Router>
  , document.getElementById('app'));