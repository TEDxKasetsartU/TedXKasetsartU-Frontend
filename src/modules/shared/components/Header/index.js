import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'

const URL = process.env.REACT_APP_HOST
const APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID
const BING_VALID = process.env.REACT_APP_BING_VALIDATE

const Header = props => {
  const { year, concept, location } = props
  const title = `TEDxKasetsartU ${year} - ${concept}`
  const description = `${title} @${location}`
  const thumbnail = `${URL}${loadImage('cover', year, 'thumbnail.png').slice(1)}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='TEDxKasetsartU,ted,tedx,kasetsart,kaset,TEDx,KU,ku,tedxkaset,tedxkasetu,detxkaset,tedxku,tad,tadxkaset,tadxku' />
      <meta name='author' content='TEDxKasetsartU' />
      <meta name='msvalidate.01' content={BING_VALID} />
      <meta property='fb:app_id' content={APP_ID} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={URL} />
      <meta property='og:type' content='event' />
      <meta property='og:site_name' content={title} />
      <meta property='og:image' content={thumbnail} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:url' content={URL} />
      <meta name='twitter:image' content={thumbnail} />
      <meta name='twitter:site' content='@TEDxKasetsartU' />
      <meta name='twitter:creator' content='@TEDxKasetsartU' />
    </Helmet>
  )
}

Header.propTypes = {
  year: PropTypes.number,
  concept: PropTypes.string,
  location: PropTypes.string
}

export default Header
