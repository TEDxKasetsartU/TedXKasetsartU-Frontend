import React, {Fragment} from 'react'

import { BrowserRouter } from 'react-router-dom'
import Footer from './modules/shared/components/Footer'
import NavBar from './modules/shared/components/NavBar'
import Router from './Router'

export default () => (
  <BrowserRouter>
    <Fragment>
      <NavBar />
      <Router />
      <Router />
      <Footer />
    </Fragment>
  </BrowserRouter>
)
