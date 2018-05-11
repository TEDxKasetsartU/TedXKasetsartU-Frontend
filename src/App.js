import React, {Fragment} from 'react'

import { BrowserRouter } from 'react-router-dom'
import Footer from 'modules/shared/components/Footer'
import Header from 'modules/shared/components/Header'
import NavBar from 'modules/shared/components/NavBar'
import Router from 'Router'
import data from 'data/2018'

export default () => {
  const { live: { isLive } } = data
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <NavBar isLive={isLive} />
        <Router />
        <Footer />
      </Fragment>
    </BrowserRouter>
  )
}
