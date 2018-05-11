import Cover from 'modules/home/components/Cover'
import Live from 'modules/home/components/Live'
import Location from 'modules/home/components/Location'
import PropTypes from 'prop-types'
import React from 'react'
import Speakers from 'modules/home/components/Speakers'
import Sponsors from 'modules/home/components/Sponsors'
import Volunteers from 'modules/home/components/Volunteers'

const HomePage = props => {
  const { year, location, concept, speakers, partners, volunteers, live: { isLive, channel } } = props.data
  return (
    <div>
      <Cover year={year} />
      <Location location={location} year={year} concept={concept} />
      { isLive && <Live channel={channel} /> }
      <Speakers speakers={speakers} year={year} />
      <Sponsors sponsors={partners} year={year} />
      <Volunteers volunteers={volunteers} year={year} />
    </div>
  )
}

HomePage.propTypes = {
  data: PropTypes.object
}

export default HomePage
