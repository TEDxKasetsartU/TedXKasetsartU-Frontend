import PropTypes from 'prop-types'
import React from 'react'

const YoutubePlayer = props => (
  <div className='embed-responsive embed-responsive-16by9'>
    <iframe className='embed-responsive-item' src={`https://www.youtube.com/embed/${props.id}`} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
  </div>
)

YoutubePlayer.propTypes = {
  id: PropTypes.string
}

export default YoutubePlayer
