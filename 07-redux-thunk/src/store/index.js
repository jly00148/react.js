import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //处理异步请求
import reducer from './reducer.js'

const store = createStore(reducer,applyMiddleware(thunk))

export default store