import React from 'react'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const LocationContainer = styled.div`
    width: 100%;
`

const MapSection = styled.div`
    @media (min-width: 992px) {
        padding: 50px;
    }
`

const MapContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`

const GoogleMapFrame = styled.iframe`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0;
`

export default props => (
  <Section
    backgroundColor={colors.black}
    titleColor={colors.white}
    dividerColor={colors.white}
    title='Event'
    id='event'
  >
    <LocationContainer className='row'>
      <div className='col-md-6'>TBA</div>
      <MapSection className='col-md-6'>
        <MapContainer>
          <GoogleMapFrame src={`https://www.google.com/maps/embed?pb=${props.location.google_map}`} allowfullscreen />
        </MapContainer>
      </MapSection>
    </LocationContainer>
  </Section>
)
