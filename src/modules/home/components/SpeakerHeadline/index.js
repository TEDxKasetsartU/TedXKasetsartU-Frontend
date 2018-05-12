import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const SpeakerHeadlineContainer = styled.div`
    width: 100%;
    border-left: 7px solid white;
    border-right: 7px solid white;
    padding: 10px 0;
    margin: 5% 0;
    background-color: ${colors.lightRed};
`

const Title = styled.h4`
    color: ${colors.white};
`

const Author = styled.span`
    color: ${colors.white};
`

const SpeakerHeadline = props => (
  <SpeakerHeadlineContainer className='text-center'>
    { props.title
      ? (
        <Fragment>
          <div>
            <Title>{props.title}</Title>
          </div>
          <div>
            <Author>{props.author}</Author>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <Title>{props.author}</Title>
          </div>
          <div>
            <Author>{props.description}</Author>
          </div>
        </Fragment>
      )
    }
  </SpeakerHeadlineContainer>
)

SpeakerHeadline.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
}

export default SpeakerHeadline
