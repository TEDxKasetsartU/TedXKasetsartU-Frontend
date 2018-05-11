import PropTypes from 'prop-types'
import React from 'react'
import ScrollContainer from 'common/components/ScrollContainer'
import SpeakerCard from 'modules/home/components/SpeakerCard'

const SpeakerSelector = props => {
  const { year, activeSpeaker, selectSpeaker } = props
  return (
    <ScrollContainer color='white'>
      {
        props.speakers.map((speaker) => {
          const { name } = speaker
          return (
            <SpeakerCard speaker={speaker} year={year} key={name} activeSpeaker={activeSpeaker} selectSpeaker={selectSpeaker} />
          )
        })
      }
    </ScrollContainer>
  )
}

SpeakerSelector.propTypes = {
  speakers: PropTypes.array,
  year: PropTypes.number,
  activeSpeaker: PropTypes.string,
  selectSpeaker: PropTypes.func
}

export default SpeakerSelector
