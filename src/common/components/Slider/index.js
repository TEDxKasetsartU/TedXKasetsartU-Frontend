import PropTypes from 'prop-types'
import React from 'react'
import SlickSlider from 'react-slick'
import settings from './settings'

const Slider = (props) => (
  <SlickSlider {...settings}>
    { props.children }
  </SlickSlider>
)

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Slider
