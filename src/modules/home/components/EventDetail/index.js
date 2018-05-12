import React, { Fragment } from 'react'

import BookButton from 'modules/home/components/BookButton'
import CountDownText from 'modules/home/components/CountDownText'
import PropTypes from 'prop-types'
import TEDLogo from 'images/common/TEDWhiteLogo.png'
import loadImage from 'common/utils/loadImage'
import moment from 'moment-timezone'
import styled from 'styled-components'

const ConceptImage = styled.img`
    margin: 16px 0;
    @media (max-width: 991px) {
        margin: 16px;
    }
`

const TZ = 'Asia/Bangkok'

function formatDate (date) {
  return moment.tz(date, TZ).format('DD MMM YYYY')
}

function formatTime (date) {
  return moment.tz(date, TZ).format('HH:mm')
}

function isBefore (date) {
  const now = moment().tz(TZ)
  const momentDate = moment.tz(date, TZ)
  return now.isBefore(momentDate)
}

function isBetween (start, end) {
  return !isBefore(start) && isBefore(end)
}

const EventDetail = props => {
  const { location, start, end, endTicket, year, concept, bookUrl } = props
  return (
    <Fragment>
      <img src={TEDLogo} height='40' alt='' />
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
