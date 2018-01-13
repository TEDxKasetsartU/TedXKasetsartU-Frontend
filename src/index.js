import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Router from './Router'
import { render } from 'react-dom'

render(<BrowserRouter><Router /></BrowserRouter>, document.getElementById('root'))
