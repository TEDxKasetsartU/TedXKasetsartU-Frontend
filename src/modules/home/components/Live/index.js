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
    <YoutubePlayer id={`live_stream?channel=${props.live.channel}`} title='TEDxKasetsartU Live' />
  </Section>
)

Live.propTypes = {
  live: PropTypes.object
}

export default Live
