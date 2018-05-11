import Cover from 'images/2018/cover/thumbnail.png'
import { Helmet } from 'react-helmet'
import React from 'react'

const URL = process.env.REACT_APP_HOST

export default props => (
  <Helmet>
    <title>TEDxKasetsartU 2018 - OUT OF NORM</title>
    <meta name='description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta property='og:title' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta property='og:description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta property='og:url' content={URL} />
    <meta property='og:type' content='event' />
    <meta property='og:site_name' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta property='og:image' content={`${URL}${Cover.slice(1)}`} />
    <meta property='og:image:width' content='1201' />
    <meta property='og:image:height' content='686' />
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta name='twitter:description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta name='twitter:url' content={URL} />
    <meta name='twitter:image' content={`${URL}${Cover.slice(1)}`} />
    <meta name='twitter:site' content='@TEDxKasetsartU' />
    <meta name='twitter:creator' content='@TEDxKasetsartU' />
  </Helmet>
)
