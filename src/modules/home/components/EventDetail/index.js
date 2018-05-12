import React, { Fragment } from 'react'
import { formatDate, formatTime, isBefore, isBetween } from 'common/utils/dateUtils'

import BookButton from 'modules/home/components/BookButton'
import CountDownText from 'modules/home/components/CountDownText'
import PropTypes from 'prop-types'
import TEDLogo from 'images/common/TEDWhiteLogo.png'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const ConceptImage = styled.img`
    margin: 16px 0;
    @media (max-width: 991px) {
        margin: 16px;
    }
`

const EventDetail = props => {
  const { location, start, end, endTicket, year, concept, bookUrl } = props
  return (
    <Fragment>
      <img src={TEDLogo} height='40' alt='TEDxKasetsartU' />
      <ConceptImage src={loadImage('cover', year, 'concept.png')} alt={concept} height='25' />
      <h5>{`@${location}`}</h5>
      <h5>{formatDate(start)}</h5>
      <h5>{`${formatTime(start)} - ${formatTime(end)}`}</h5>
      { isBefore(endTicket) && (
        <Fragment>
          <CountDownText date={endTicket} action='get ticket' />
          <BookButton bookUrl={bookUrl} />
        </Fragment>
      )
      }
      { isBetween(endTicket, end) && <CountDownText date={end} action='TEDxKasetsartU' /> }
    </Fragment>
  )
}

EventDetail.propTypes = {
  location: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  endTicket: PropTypes.instanceOf(Date),
  year: PropTypes.number,
  concept: PropTypes.string,
  bookUrl: PropTypes.string
}

export default EventDetail
