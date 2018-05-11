import React, {Fragment} from 'react'

import Footer from 'modules/shared/components/Footer'
import Header from 'modules/shared/components/Header'
import Home from 'modules/home/pages/HomePage'
import NavBar from 'modules/shared/components/NavBar'
import data from 'data/2018'

export default () => {
  const { live: { isLive }, year, concept: { text }, location: { name } } = data
  return (
    <Fragment>
      <Header year={year} concept={text} location={name} />
      <NavBar isLive={isLive} />
      <Home data={data} />
      <Footer />
    </Fragment>
  )
}
