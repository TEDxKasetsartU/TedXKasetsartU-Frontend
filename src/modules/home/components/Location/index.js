import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'
import moment from 'moment-timezone'
import styled from 'styled-components'

const LocationContainer = styled.div`
    width: 100%;
    margin: auto;
    @media (max-width: 991px) {
        flex-direction: column-reverse;
    }
`

const InfoSection = styled.div`
    color: white;
    padding: 10px 0;
    @media (min-width: 992px) {
        padding: 20px;
    }
    @media (min-width: 1200px) {
        padding: 50px;
    }
`

const DetailSection = styled(InfoSection)`
    @media (max-width: 991px) {
        text-align: center;
    }
`

const MapContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 75%;
`

const GoogleMapFrame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
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

const Location = props => {
  const { googleMap, start, end, ticketEnd, name } = props.location
  const startDate = moment.tz(start, 'Asia/Bangkok')
  const endDate = moment.tz(end, 'Asia/Bangkok')
  const endTicketDate = moment.tz(ticketEnd, 'Asia/Bangkok')
  const now = moment().tz('Asia/Bangkok')
  const leftTicketDay = endTicketDate.diff(now, 'days')
  const leftTicketHours = endTicketDate.diff(now, 'hours')
  const leftDay = endDate.diff(now, 'days')
  const leftHours = endDate.diff(now, 'hours')
  return (
    <Section
      backgroundColor={colors.black}
      titleColor={colors.white}
      dividerColor={colors.red}
      title='Event'
      id='event'
    >
      <div className='container'>
        <LocationContainer className='row'>
          <InfoSection className='col-12 col-lg-6'>
            <MapContainer>
              <GoogleMapFrame src={`https://www.google.com/maps/embed?pb=${googleMap}`} allowfullscreen />
            </MapContainer>
          </InfoSection>
          <DetailSection className='col-12 col-lg-6'>
            <h2>TEDxKasetsartU 2018</h2>
            <h2>Out of Norm</h2>
            <h4>{`@${name}`}</h4>
            <h4>{startDate.format('DD MMM YYYY')}</h4>
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
          </DetailSection>
        </LocationContainer>
      </div>
    </Section>
  )
}

Location.propTypes = {
  location: PropTypes.object
}

export default Location
