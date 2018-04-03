import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { initData } from './actions'


const middleware = [ thunk ]
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(initData())

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app'))

