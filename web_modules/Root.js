import React from 'react'
import getRoutes from 'routes'
import { Provider } from 'react-redux';

import store from 'store'

const Routes = getRoutes(store);

const Root = () =>
  <Provider store={store}>
      <Routes />
  </Provider>

export default Root
