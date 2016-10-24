import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import configureStore from 'lib/configureStore';
import model from 'model'
import controller from 'controller'

const ownMiddleware = [];
const enhancers = [];

ownMiddleware.push(createEpicMiddleware(controller))
ownMiddleware.push(routerMiddleware(hashHistory))

if (process.env.NODE_ENV !== 'production') {
  ownMiddleware.push(createLogger({collapsed: true}));
  enhancers.push(window.devToolsExtension ? window.devToolsExtension() : f => f);
}

let initialState = JSON.parse(document.body.getAttribute('data-redux-state'));
if (!initialState) {
    initialState = {}
}

const store = configureStore({
  initialState,
  ownMiddleware,
  enhancers,
}, model);

export default store;
