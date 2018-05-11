import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const CoverContainer = styled.div`
    width: 100%;
`

const Cover = props => {
  const { year } = props
  return (
    <Fragment>
      <CoverContainer className='d-none d-md-block'>
        <img src={loadImage('cover', year, 'cover.png')} alt='TEDxKasetsartU Cover' className='img-fluid' />
      </CoverContainer>
      <CoverContainer className='d-block d-md-none'>
        <img src={loadImage('cover', year, 'mcover.png')} alt='TEDxKasetsartU Cover' className='img-fluid' />
      </CoverContainer>
    </Fragment>
  )
}

Cover.propTypes = {
  year: PropTypes.number
}

export default Cover
