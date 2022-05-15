import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
// we import our middleware
import apiMiddleWare from '../middlewares/api';
import inscriptionDevApi from '../middlewares/inscriptionDevApi';
import inscriptionRecruiterApi from '../middlewares/inscriptionRecruiterApi';
import favorites from '../middlewares/favorites';

import searchCity from '../middlewares/searchCity';

import searchApi from '../middlewares/searchApi';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // we connect it on  the store
  applyMiddleware(apiMiddleWare, inscriptionDevApi, inscriptionRecruiterApi, searchApi, searchCity, favorites),

);

const store = createStore(reducer, enhancers);

export default store;
