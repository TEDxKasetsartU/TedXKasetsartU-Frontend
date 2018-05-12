import React, { Fragment } from 'react'

import GoogleMap from 'modules/home/components/GoogleMap'
import PropTypes from 'prop-types'
import Section from 'modules/home/components/Section'
import TEDLogo from 'images/common/TEDWhiteLogo.png'
import colors from 'common/mixins/colors'
import loadImage from 'common/utils/loadImage'
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
    font-weight: 500;
    margin: auto 0;
    @media (max-width: 991px) {
        text-align: center;
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

const ConceptImage = styled.img`
    margin: 16px 0;
    @media (max-width: 991px) {
        margin: 16px;
    }
`

const Location = props => {
  const { year, concept, location } = props
  const { text } = concept
  const { googleMap, start, end, ticketEnd, name } = location
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
            <GoogleMap googleMapId={googleMap} />
          </InfoSection>
          <DetailSection className='col-12 col-lg-6'>
            <img src={TEDLogo} height='40' alt='' />
            <ConceptImage src={loadImage('cover', year, 'concept.png')} alt={text} height='25' />
            <h5>{`@${name}`}</h5>
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
          </DetailSection>
        </LocationContainer>
      </div>
    </Section>
  )
}

Location.propTypes = {
  location: PropTypes.object,
  year: PropTypes.number,
  concept: PropTypes.object
}

export default Location
