import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Router from './Router'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

injectGlobal`
  h1, h2, h3, h4, h4 {
    font-family: 'Kanit', sans-serif;
  }
`

render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('root'))
