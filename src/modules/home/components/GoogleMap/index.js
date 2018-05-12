import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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

const GoogleMap = props => {
  const { googleMapId } = props
  return (
    <MapContainer>
      <GoogleMapFrame src={`https://www.google.com/maps/embed?pb=${googleMapId}`} allowfullscreen />
    </MapContainer>
  )
}

GoogleMap.propTypes = {
  googleMapId: PropTypes.string
}

export default GoogleMap
