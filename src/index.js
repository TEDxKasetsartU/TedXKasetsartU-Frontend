import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import App from './App'
import React from 'react'
import { injectGlobal } from 'styled-components'
import { render } from 'react-dom'

injectGlobal`
  h1, h2, h3, h4, h4, h5 {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: #000000;
  }
`

render(<App />, document.getElementById('root'))
