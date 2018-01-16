import React from 'react'
import SpeakerCard from '../SpeakerCard'
import speakers from '../../speakers'
import SectionTitle from '../../../../common/components/SectionTitle'
import Slider from '../../../../common/components/Slider'
import Panel from '../../../../common/components/Panel'

const SpeakerPanel = () => (
  <Panel>
    <SectionTitle title='Speakers' subtitle='2017' />
    <Slider>
      { speakers.map((speaker, i) =>
        <div className='p-1' key={i}>
          <SpeakerCard src={speaker.image} name={speaker.name} topic={speaker.topic} />
        </div>
      ) }
    </Slider>
  </Panel>
)

export default SpeakerPanel
