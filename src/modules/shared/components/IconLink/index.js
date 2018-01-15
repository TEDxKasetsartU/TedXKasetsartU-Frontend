import React from 'react'
import Icon from 'react-fontawesome'
import PropTypes from 'prop-types'

const IconLink = props => (
  <a href={props.href}>
    <Icon className='mr-2' name={props.name} size='lg' />
    {props.text}
  </a>
)

IconLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}

export default IconLink
