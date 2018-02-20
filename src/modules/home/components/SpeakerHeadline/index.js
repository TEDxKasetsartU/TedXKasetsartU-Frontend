import PropTypes from 'prop-types'
import React from 'react'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const SpeakerHeadlineContainer = styled.div`
    width: 100%;
    border-left: 7px solid white;
    border-right: 7px solid white;
    padding: 10px 0;
    margin: 5% 0;
    background-color: #EF5350;
`

const Title = styled.h4`
    color: ${colors.white};
`

const Author = styled.span`
    color: ${colors.white};
`

const SpeakerHeadline = props => (
  <SpeakerHeadlineContainer className='text-center'>
    <div>
      <Title>{props.title}</Title>
    </div>
    <div>
      <Author>{props.author}</Author>
    </div>
  </SpeakerHeadlineContainer>
)

SpeakerHeadline.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string
}

export default SpeakerHeadline
