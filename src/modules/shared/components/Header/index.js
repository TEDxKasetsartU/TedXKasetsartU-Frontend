import { Helmet } from 'react-helmet'
import React from 'react'
import TEDxIcon from 'images/common/favicon.ico'

export default props => (
  <Helmet>
    <meta charSet='utf-8' />
    <title>TEDxKasetsartU 2018 - OUT OF NORM</title>
    <meta name='description' content='TEDxKasetsartU 2018 - OUT OF NORM at Siam Pavalai Royal Grand Theatre@Siam Paragorn' />
    <link rel='icon' href={TEDxIcon} />
  </Helmet>
)
