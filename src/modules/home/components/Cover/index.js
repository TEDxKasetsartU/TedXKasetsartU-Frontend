import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const CoverContainer = styled.div`
    width: 100%;
`

const Cover = props => (
  <CoverContainer>
    <img src={loadImage('cover', props.year, props.cover)} alt='cover' className='img-fluid' />
  </CoverContainer>
)

Cover.propTypes = {
  cover: PropTypes.string,
  year: PropTypes.number
}

export default Cover
