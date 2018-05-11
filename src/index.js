import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.css'

import App from './App'
import React from 'react'
import ReactGA from 'react-ga'
import { injectGlobal } from 'styled-components'
import { render } from 'react-snapshot'

ReactGA.initialize(process.env.ANALYTIC)
ReactGA.pageview(window.location.pathname + window.location.search)

injectGlobal`
  body {
    background: black;
  }
  h1, h2, h3, h4, h4, h5 {
    font-family: 'Kanit', sans-serif;
  }
`

render(<App />, document.getElementById('root'))
