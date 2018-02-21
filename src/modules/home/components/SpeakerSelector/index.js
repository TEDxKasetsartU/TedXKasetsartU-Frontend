import React from 'react'
import loadImage from 'common/utils/loadImage'

const SpeakerSelector = props => (
  <div className='row'>
    {props.speakers.map((speaker) => (
      <div key={speaker.name} className='aa'>
        <img src={loadImage('speakers', props.year, speaker.imageSrc)} className='img-fluid' />
      </div>
    ))}
  </div>
)

export default SpeakerSelector
