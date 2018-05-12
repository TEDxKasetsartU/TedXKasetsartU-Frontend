import moment from 'moment-timezone'

const TZ = 'Asia/Bangkok'

export function formatDate (date) {
  return moment.tz(date, TZ).format('DD MMM YYYY')
}

export function formatTime (date) {
  return moment.tz(date, TZ).format('HH:mm')
}

export function isBefore (date) {
  const now = moment().tz(TZ)
  const momentDate = moment.tz(date, TZ)
  return now.isBefore(momentDate)
}

export function isBetween (start, end) {
  return !isBefore(start) && isBefore(end)
}

export function getTimeLeft (date) {
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
