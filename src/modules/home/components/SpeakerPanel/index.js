import React from 'react'
import SectionTitle from 'common/components/SectionTitle'
import Slider from 'common/components/Slider'
import SpeakerCard from 'modules/home/components/SpeakerCard'
import speakers from 'modules/home/speakers'
import styled from 'styled-components'

const Panel = styled.div.attrs({
  className: 'container-fluid'
})`
  max-width: 1100px;
  margin: auto;
`

const SpeakerPanel = () => (
  <Panel>
    <SectionTitle title='Speakers' textColor='black' underlineColor='red' />
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
