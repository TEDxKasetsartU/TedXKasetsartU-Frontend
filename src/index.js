import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.css'

import App from './App'
import React from 'react'
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom'

injectGlobal`
  body {
    background: black;
  }
  h1, h2, h3, h4, h4, h5 {
    font-family: 'Kanit', sans-serif;
  }
`

render(<App />, document.getElementById('root'))
