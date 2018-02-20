import PropTypes from 'prop-types'
import React from 'react'
import Section from 'modules/home/components/Section'
import SpeakerHeadline from 'modules/home/components/SpeakerHeadline'
import YoutubePlayer from 'modules/home/components/YoutubePlayer'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const SpeakerDetail = styled.div`
    padding: 0 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 769px){
        width: 60%;
    }
`

const Speakers = props => (
  <Section
    backgroundColor={colors.red}
    titleColor={colors.white}
    dividerColor={colors.white}
    title='Speakers'
  >
    <SpeakerDetail>
      <SpeakerHeadline title={props.speakers[0].topic} author={props.speakers[0].name} />
      <YoutubePlayer id={props.speakers[0].youtubeId} />
    </SpeakerDetail>
  </Section>
)

Speakers.propTypes = {
  speakers: PropTypes.array
}

export default Speakers
