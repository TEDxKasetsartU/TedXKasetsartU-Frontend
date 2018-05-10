import PropTypes from 'prop-types'
import React from 'react'
import colors from 'common/mixins/colors'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const CardContainer = styled.div`
    position: relative;
    max-height: 150px;
`

const InfoOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: ${colors.red};
    &:hover {
        opacity: 0.75;
    }
`

const InfoContainer = styled.div`
    font-size: 0.75em;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageCard = styled.img`
    max-height: 100%;
    display: block;
`

const VolunteerCard = props => (
  <CardContainer>
    <ImageCard src={loadImage('volunteers', props.year, props.imageSrc)} alt={props.name} />
    <InfoOverlay>
      <InfoContainer>
        <p>{props.name}</p>
        <p>{props.position}</p>
      </InfoContainer>
    </InfoOverlay>
  </CardContainer>
)

VolunteerCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  position: PropTypes.string,
  imageSrc: PropTypes.string
}

export default VolunteerCard