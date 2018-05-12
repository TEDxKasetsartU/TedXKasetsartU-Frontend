import PropTypes from 'prop-types'
import React from 'react'
import colors from 'common/mixins/colors'
import moment from 'moment-timezone'
import styled from 'styled-components'

const RedText = styled.span`
    color: ${colors.red};
`

const TZ = 'Asia/Bangkok'

function getTimeLeft (date) {
  const now = moment().tz(TZ)
  const momentDate = moment.tz(date, TZ)
  let unit = 'days'
  let left = momentDate.diff(now, unit)
  if (left < 1) {
    unit = 'hours'
    left = momentDate.diff(now, unit)
  }
  return { left, unit }
}

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
