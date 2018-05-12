import React, { Fragment } from 'react'

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

const BookButton = styled.a`
    border-radius: 0rem;
    border-width: 1px;
    font-size: 1.25rem;
    margin: 5px 0;
    font-weight: bold;
`

const EventDetail = props => {
  const { location, start, end, endTicket, year, concept } = props
  const startDate = moment.tz(start, 'Asia/Bangkok')
  const endDate = moment.tz(end, 'Asia/Bangkok')
  const endTicketDate = moment.tz(endTicket, 'Asia/Bangkok')
  const now = moment().tz('Asia/Bangkok')
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
          <BookButton className='btn btn-outline-danger' href='https://line.me/R/ti/p/%40tedxkasetsartu' >Book Now</BookButton>
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
  concept: PropTypes.string
}

export default EventDetail
