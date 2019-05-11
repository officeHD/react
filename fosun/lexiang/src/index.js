import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import reducer from './reducers'
import thunk from 'redux-thunk'
import InstructionContainer from './containers/InstructionContainer'
import { initData } from './actions'



// const InstructionContainer = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./containers/InstructionContainer').default);
//     }, 'InstructionContainer');
// }
const Step1Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step1Container').default);
    }, 'Step1Container');
}
 
const Step2Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step2Container').default);
    }, 'Step2Container');
}
const Step3Container = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./containers/Step3Container').default);
    }, 'Step3Container');
}
 
const InsuAtten = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./components/InsuAtten').default);
    }, 'InsuAtten');
}
 


const middleware = [thunk]
let local_name = "ms_"+sessionStorage.appversion;
const loadState = () => {
    try { // 也可以容错一下不支持localStorage的情况下，用其他本地存储
        const serializedState = sessionStorage.getItem(local_name);
        if (serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        // ... 错误处理
        return undefined;
    }
}


const store = createStore(
    reducer,
    loadState(),
    applyMiddleware(...middleware),

)

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem(local_name, serializedState);
    } catch (err) {
        // ...错误处理
    }
};
store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})
store.dispatch(initData())



render(
    <Provider store={store}>
        <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={InstructionContainer} />
            <Route path="/insuAtten" getComponent={InsuAtten} />
            <Route path="/step1" getComponent={Step1Container} />
            <Route path="/step2" getComponent={Step2Container} />
            <Route path="/step3" getComponent={Step3Container} />
        </Router>
    </Provider>,
    document.getElementById('app')
)