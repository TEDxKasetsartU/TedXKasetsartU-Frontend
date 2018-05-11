import PropTypes from 'prop-types'
import React from 'react'
import Section from 'modules/home/components/Section'
import YoutubePlayer from 'modules/home/components/YoutubePlayer'
import colors from 'common/mixins/colors'

const Live = props => (
  <Section
    backgroundColor={colors.red}
    titleColor={colors.white}
    dividerColor={colors.white}
    title='Live'
    id='live'
  >
    <YoutubePlayer id={`live_stream?channel=${props.channel}&autoplay=1`} title='TEDxKasetsartU Live' />
  </Section>
)

Live.propTypes = {
  channel: PropTypes.string
}

export default Live
