import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countriesReducer from './countries/reducer';

const reducer = combineReducers({
  countriesReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
