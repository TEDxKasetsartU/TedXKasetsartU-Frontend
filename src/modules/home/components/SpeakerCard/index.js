import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const ImageContainer = styled.div`
  height: 300px;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-block;
`

const Image = styled.img`
  max-height: 100%;
  filter: ${props => props.isSelected ? 'none' : 'grayscale(100%)'};
  &:hover {
    filter: none;
    transition: all 300ms;
  }
  &:after {
    transition: transform 300ms ease-in-out;
  }
`

class SpeakerCard extends React.PureComponent {
  render () {
    const { speaker, speaker: { imageSrc, name }, year, activeSpeaker, selectSpeaker } = this.props
    return (
      <ImageContainer>
        <Image src={loadImage('speakers', year, imageSrc)} onClick={() => selectSpeaker(speaker)} isSelected={name === activeSpeaker} />
      </ImageContainer>
    )
  }
}

SpeakerCard.propTypes = {
  speaker: PropTypes.object,
  year: PropTypes.number,
  activeSpeaker: PropTypes.string,
  selectSpeaker: PropTypes.func
}

export default SpeakerCard
