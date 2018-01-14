import React from 'react'
import Title from '../components/Title'
import SpeakerCard from '../components/SpeakerCard'

const profile = {
  name: 'อ.ดร. กาญจนพันธุ์ สุขวิชชัย',
  image: 'https://res.cloudinary.com/keystone-demo/image/upload/v1492510365/tu4g2mfbcqoaaenixvny.jpg',
  speaker_info: 'อาจารย์ประจำภาควิชาวิศวกรรมไฟฟ้า คณะวิศวกรรมศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และ ผู้ก่อตั้งชมรมScuba แชมป์การแข่งขันรายการ World RoboCup Organization (Small Size Robot Soccer League) ปี 2009 – 2014',
  topic: 'โดราเอม่อนตอน บ้านเล็กๆบนภูเขาน้ำแข็ง',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  youtube_url_id: 'https://www.youtube.com/watch?v=cDIPfkZYBhU'
}

export default () => (
  <div style={{ margin: '20px' }}>
    <Title title='Sample' />
    <SpeakerCard src={profile.image} name={profile.name} topic={profile.topic} />
  </div>
)
