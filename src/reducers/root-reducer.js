import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import drinksReducer from './drink-reducer';


import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
  drinksPage: drinksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
window.__store__ = store;

export default store;
