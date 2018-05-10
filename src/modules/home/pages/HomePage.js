import Cover from 'modules/home/components/Cover'
import Location from 'modules/home/components/Location'
import React from 'react'
import Speakers from 'modules/home/components/Speakers'
import Sponsors from 'modules/home/components/Sponsors'
import data from 'modules/home/data/data'

export default () => (
  <div>
    <Cover cover={data[0].cover} mcover={data[0].mobile_cover} year={data[0].year} />
    <Location />
    <Speakers speakers={data[0].speakers} year={data[0].year} />
    <Sponsors sponsors={data[0].partners} year={data[0].year} />
  </div>
)
