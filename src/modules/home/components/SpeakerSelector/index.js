import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const ImageContainer = styled.div`
  padding: 0;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`

const Image = styled.img`
  max-height: 100%;
  transform: translateX(-25%);
  filter: ${props => props.isSelected ? 'none' : 'grayscale(100%)'};
  &:hover {
    filter: none;
  }
`

const BaseContainer = styled.div`
  width: 100%;
`

const SpeakerSelector = props => (
  <BaseContainer className='row'>
    {props.speakers.map((speaker) => (
      <ImageContainer key={speaker.name} className='col-md'>
        <Image src={loadImage('speakers', props.year, speaker.imageSrc)} />
      </ImageContainer>
    ))}
  </BaseContainer>
)

export default SpeakerSelector
