import PropTypes from 'prop-types'
import React from 'react'
import ScrollContainer from 'common/components/ScrollContainer'
import SpeakerCard from 'modules/home/components/SpeakerCard'

const SpeakerSelector = props => (
  <ScrollContainer color='white'>
    {props.speakers.map((speaker) => (
      <SpeakerCard speaker={speaker} year={props.year} key={speaker.name} />
    ))}
  </ScrollContainer>
)

SpeakerSelector.propTypes = {
  speakers: PropTypes.array,
  year: PropTypes.number
}

export default SpeakerSelector
