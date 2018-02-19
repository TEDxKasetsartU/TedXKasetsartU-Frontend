import Cover from 'modules/home/components/Cover'
import React from 'react'
import SpeakerPanel from 'modules/home/components/SpeakerPanel'
import data from 'modules/home/data/data'

export default () => (
  <div>
    <Cover cover={data[0].cover} year={data[0].year} />
    <SpeakerPanel />
  </div>
)
