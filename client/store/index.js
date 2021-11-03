import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { thunkMiddleware } from 'redux-thunk';
import auth from './auth';
// import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({ auth });
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapserd: true}));

const store = createStore(reducer, middleware);

export default store;
export * from './auth';
