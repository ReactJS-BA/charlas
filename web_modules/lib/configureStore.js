import { createStore, applyMiddleware, compose } from 'redux';

export default function (options = {}, reducers) {
  const {
    initialState = {},
    ownMiddleware = [],
    enhancers = [],
  } = options;

  const appliedMiddleware = applyMiddleware(
    ...ownMiddleware,
  );

  const store = createStore(
    reducers,
    initialState,
    compose(
      appliedMiddleware,
      ...enhancers
    )
  );

  return store;

}
