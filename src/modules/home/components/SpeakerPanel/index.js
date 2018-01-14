import React from 'react'
import styled from 'styled-components'
import SpeakerCard from '../SpeakerCard'
import speakers from '../../speakers'

const Grid = styled.div.attrs({
  className: 'container-fluid'
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: .5em;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SpeakerPanel = () => (
  <Grid>
    { speakers.map((speaker, i) =>
      <SpeakerCard src={speaker.image} name={speaker.name} topic={speaker.topic} />
    ) }
  </Grid>
)

export default SpeakerPanel
