import Cover from 'images/2018/cover/cover.png'
import { Helmet } from 'react-helmet'
import React from 'react'

export default props => (
  <Helmet>
    <title>TEDxKasetsartU 2018 - OUT OF NORM</title>
    <meta name='description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta property='og:title' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta property='og:description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta property='og:url' content='https://tedxkasetsartu.com' />
    <meta property='og:type' content='website' />
    <meta property='og:image' content={Cover} />
    <meta name='twitter:card' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta name='twitter:title' content='TEDxKasetsartU 2018 - OUT OF NORM' />
    <meta name='twitter:description' content='TEDxKasetsartU 2018 - OUT OF NORM @Siam Pavalai Royal Grand Theatre' />
    <meta name='twitter:url' content='https://tedxkasetsartu.com' />
    <meta property='twitter:image' content={Cover} />
  </Helmet>
)
