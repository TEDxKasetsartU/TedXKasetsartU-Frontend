import React, { Fragment } from 'react'

import BookButton from 'modules/home/components/BookButton'
import PropTypes from 'prop-types'
import TEDLogo from 'images/common/TEDWhiteLogo.png'
import colors from 'common/mixins/colors'
import loadImage from 'common/utils/loadImage'
import moment from 'moment-timezone'
import styled from 'styled-components'

const ConceptImage = styled.img`
    margin: 16px 0;
    @media (max-width: 991px) {
        margin: 16px;
    }
`

const RedText = styled.span`
    color: ${colors.red};
`

const TZ = 'Asia/Bangkok'

const EventDetail = props => {
  const { location, start, end, endTicket, year, concept, bookUrl } = props
  const startDate = moment.tz(start, TZ)
  const endDate = moment.tz(end, TZ)
  const endTicketDate = moment.tz(endTicket, TZ)
  const now = moment().tz(TZ)
  const leftTicketDay = endTicketDate.diff(now, 'days')
  const leftTicketHours = endTicketDate.diff(now, 'hours')
  const leftDay = endDate.diff(now, 'days')
  const leftHours = endDate.diff(now, 'hours')
  return (
    <Fragment>
      <img src={TEDLogo} height='40' alt='' />
      <ConceptImage src={loadImage('cover', year, 'concept.png')} alt={concept} height='25' />
      <h5>{`@${location}`}</h5>
      <h5>{startDate.format('DD MMM YYYY')}</h5>
      <h5>{`${startDate.format('HH:mm')} - ${endDate.format('HH:mm')}`}</h5>
      { now.isBefore(endTicketDate) && (
        <Fragment>
          { leftTicketDay > 0
            ? (<h5><RedText>{leftTicketDay}</RedText> Days Left to Get Ticket !</h5>)
            : (<h5><RedText>{leftTicketHours}</RedText> Hours Left to Get Ticket !</h5>)
          }
          <BookButton bookUrl={bookUrl} />
        </Fragment>
      )
      }
      { !now.isBefore(endTicketDate) && now.isBefore(endDate) && (
        <Fragment>
          { leftDay > 0
            ? (<h5><RedText>{leftDay}</RedText> Days Left to TEDxKasetsartU !</h5>)
            : (<h5><RedText>{leftHours}</RedText> Hours Left to TEDxKasetsartU !</h5>)
          }
        </Fragment>
      ) }
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
