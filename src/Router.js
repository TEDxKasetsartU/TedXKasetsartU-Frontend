import {
  Route,
  Switch
} from 'react-router-dom'

import HomeRoutes from 'modules/home/routes'
import React from 'react'

function generateRoutes (routes) {
  return routes.routes.map((route) => (
    <Route
      key={`${routes.prefix}/${route.path}`}
      exact={route.exact}
      path={`${routes.prefix}/${route.path}`}
      component={route.page}
    />
  ))
}

export default () => (
  <Switch>
    {generateRoutes(HomeRoutes)}
  </Switch>
)
