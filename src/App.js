import React, {Fragment} from 'react'

import { BrowserRouter } from 'react-router-dom'
import NavBar from './modules/shared/components/NavBar'
import Router from './Router'

export default () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <Router />
    </Fragment>
  </BrowserRouter>
)
