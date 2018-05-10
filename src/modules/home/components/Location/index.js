import React from 'react'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'

export default props => (
  <Section
    backgroundColor={colors.black}
    titleColor={colors.white}
    dividerColor={colors.white}
    title='Event'
    id='event'
  />
)
