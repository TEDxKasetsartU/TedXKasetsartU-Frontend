import React from 'react'
import styled from 'styled-components'
import SpeakerCard from '../SpeakerCard'
import speakers from '../../speakers'
import SectionTitle from '../../../../common/components/SectionTitle'

const Panel = styled.div.attrs({
  className: 'container-fluid'
})`
  max-width: 1100px;
  margin: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: .5em;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SpeakerPanel = () => (
  <Panel>
    <SectionTitle title='Speakers' subtitle='2017' />
    <Grid>
      { speakers.map((speaker, i) =>
        <SpeakerCard src={speaker.image} name={speaker.name} topic={speaker.topic} />
      ) }
    </Grid>
  </Panel>
)

export default SpeakerPanel
