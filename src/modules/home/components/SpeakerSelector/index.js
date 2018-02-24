import React from 'react'
import SpeakerCard from 'modules/home/components/SpeakerCard'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const BaseContainer = styled.div`
  width: 100%;
`

const SpeakerSelector = props => (
  <BaseContainer className='row'>
    {props.speakers.map((speaker) => (
      <SpeakerCard speaker={speaker} year={props.year} key={speaker.name} />
    ))}
  </BaseContainer>
)

export default SpeakerSelector
