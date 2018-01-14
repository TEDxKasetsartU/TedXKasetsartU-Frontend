import React from 'react'
import Title from '../components/Title'
import SpeakerCard from '../components/SpeakerCard'

const profile = {
  name: 'อ.ดร. กาญจนพันธุ์ สุขวิชชัย',
  src: 'https://res.cloudinary.com/keystone-demo/image/upload/v1492510365/tu4g2mfbcqoaaenixvny.jpg',
  topic: 'โดราเอม่อนตอน บ้านเล็กๆบนภูเขาน้ำแข็ง'
}

export default () => (
  <div style={{ margin: '20px' }}>
    <Title title='Sample' />
    <SpeakerCard src={profile.src} name={profile.name} topic={profile.topic} />
  </div>
)
