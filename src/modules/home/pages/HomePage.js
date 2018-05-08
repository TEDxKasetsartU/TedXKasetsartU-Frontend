import Cover from 'modules/home/components/Cover'
import React from 'react'
import Speakers from 'modules/home/components/Speakers'
import Sponsors from 'modules/home/components/Sponsors'
import data from 'modules/home/data/data'

export default () => (
  <div>
    <Cover cover={data[0].cover} year={data[0].year} />
    <Speakers speakers={data[0].speakers} year={data[0].year} />
    <Sponsors sponsors={data[0].partners} year={data[0].year} />
  </div>
)
