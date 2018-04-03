import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Orderlist from './components/Orderlist';
import App from './components/App';
 
const subFrame = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/SubFrame').default);
    }, 'subFrame');
}
const orderdetail = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Orderdetail').default);
    }, 'orderdetail');
}
const pay = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/Pay').default);
    }, 'pay');
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
        <IndexRoute component={Orderlist}/>
        
        <Route path="/orderdetail" getComponent={orderdetail}/>
        <Route path="/subFrame" getComponent={subFrame}/>
        <Route path="/pay" getComponent={pay}/>
        <Route path="/result" getComponent={result}/>
        <Route path="/banksupport" getComponent={banksupport}/>
        
    </Route>
  </Router>
  , document.getElementById('app'));