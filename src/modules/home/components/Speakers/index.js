import React from 'react'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'
import YoutubePlayer from 'modules/home/components/YoutubePlayer'

const Speakers = props => (
    <Section
        backgroundColor={colors.red}
        titleColor={colors.white}
        dividerColor={colors.white}
        title="Speakers"
    >
        aaa
        <YoutubePlayer />
    </Section>
)

export default Speakers