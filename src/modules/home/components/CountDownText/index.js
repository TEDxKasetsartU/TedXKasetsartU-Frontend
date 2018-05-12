import PropTypes from 'prop-types'
import React from 'react'
import colors from 'common/mixins/colors'
import { getTimeLeft } from 'common/utils/dateUtils'
import styled from 'styled-components'

const RedText = styled.span`
    color: ${colors.red};
`

const CountDownText = props => {
  const { date, action } = props
  const { left, unit } = getTimeLeft(date)
  return (
    <h5><RedText>{left}</RedText> {unit} left to {action} !</h5>
  )
}

CountDownText.propTypes = {
  date: PropTypes.instanceOf(Date),
  action: PropTypes.string
}

export default CountDownText
