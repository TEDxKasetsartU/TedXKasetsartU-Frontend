import React from 'react'
import styled from 'styled-components'
import Panel from '../../../../common/components/Panel'
import SectionTitle from '../../../../common/components/SectionTitle'
import partners from './partners'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > img {
    cursor: pointer;
    padding: .5em;
    width: 100%;
    transition: all 300ms;
  }

  > img:hover {
    transform: scale(0.95);
  }
`

const High = Flex.extend`
  > img {
    max-width: 240px;
  }
`

const Medium = Flex.extend`
  > img {
    max-width: 170px;
  }
`

const Low = Flex.extend`
  > img {
    max-width: 120px;
  }
`

const PartnerPanel = () => (
  <Panel>
    <SectionTitle title='Partners' />
    <High>
      { partners.high.map((img, i) =>
        <img key={i} src={img} alt={img} />
      ) }
    </High>
    <Medium>
      { partners.medium.map((img, i) =>
        <img key={i} src={img} alt={img} />
      ) }
    </Medium>
    <Low>
      { partners.low.map((img, i) =>
        <img key={i} src={img} alt={img} />
      ) }
    </Low>
  </Panel>
)

export default PartnerPanel
