import Cover from 'images/2018/cover/cover.png'
import { Helmet } from 'react-helmet'
import React from 'react'

export default props => (
  <Helmet>
    <title>TEDxKasetsartU 2018 - OUT OF NORM</title>
    <meta name='description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta property='og:title' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta property='og:description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta property='og:url' content={window.location.href} />
    <meta property='og:type' content='event' />
    <meta property='og:site_name' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta property='og:image' content={`${window.location.href}${Cover}`} />
    <meta name='twitter:card' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta name='twitter:title' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta name='twitter:description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta name='twitter:url' content={window.location.href} />
    <meta name='twitter:image' content={`${window.location.href}${Cover}`} />
  </Helmet>
)
