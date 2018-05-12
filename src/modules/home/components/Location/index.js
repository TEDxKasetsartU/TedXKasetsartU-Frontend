import EventDetail from 'modules/home/components/EventDetail'
import GoogleMap from 'modules/home/components/GoogleMap'
import PropTypes from 'prop-types'
import React from 'react'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'
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

const Location = props => {
  const { year, concept, location } = props
  const { text } = concept
  const { googleMap, start, end, ticketEnd, name } = location
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
            <EventDetail location={name} start={start} end={end} endTicket={ticketEnd} concept={text} year={year} />
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
