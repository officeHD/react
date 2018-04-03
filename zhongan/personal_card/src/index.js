import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { initData } from './actions'
import InstructionContainer from './containers/InstructionContainer'
import Step1Container from './containers/Step1Container'
import Step2Container from './containers/Step2Container'
import Step3Container from './containers/Step3Container'
import Step4Container from './containers/Step4Container'

const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(initData())

render(
  <Provider store={store}>
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={InstructionContainer}/>
      <Route path="/step1" component={Step1Container}/>
      <Route path="/step2" component={Step2Container}/>
      <Route path="/step3" component={Step3Container}/>
      <Route path="/step4" component={Step4Container}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)