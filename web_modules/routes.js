import React from 'react'
import { Router, hashHistory, withRouter } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import applyMiddleware from 'react-router-apply-middleware'
import { useRelativeLinks } from 'react-router-relative-links'

import { App, Home, Landing } from 'view'

const routes = {
  path : '/',
  component : withRouter(App),
  indexRoute : { component : Landing },
  childRoutes: [
      { path : "home", component : Home }
  ]
}

export default (store) => () =>
      <Router routes={routes}
          history={syncHistoryWithStore(hashHistory, store)}
          render={applyMiddleware(useRelativeLinks())}  />
