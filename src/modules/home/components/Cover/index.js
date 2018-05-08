import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const CoverContainer = styled.div`
    width: 100%;
`

const Cover = props => (
  <Fragment>
    <CoverContainer id='event' className='d-none d-md-block'>
      <img src={loadImage('cover', props.year, props.cover)} alt='cover' className='img-fluid' />
    </CoverContainer>
    <CoverContainer id='event' className='d-block d-md-none'>
      <img src={loadImage('cover', props.year, props.mcover)} alt='cover' className='img-fluid' />
    </CoverContainer>
  </Fragment>
)

Cover.propTypes = {
  cover: PropTypes.string,
  mcover: PropTypes.string,
  year: PropTypes.number
}

export default Cover
