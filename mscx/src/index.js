import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import reducer from './reducers'

import Index from './components/Index'
import Detail from './components/Detail'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}/>
      <Route path="/detail" component={Detail}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)