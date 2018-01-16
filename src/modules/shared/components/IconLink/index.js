import Icon from 'react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const IconLinkContainer = styled.a`
  font-size: 14px;
`

const IconLink = props => (
  <IconLinkContainer href={props.href}>
    <Icon className='mr-2' name={props.name} size='lg' />
    {props.text}
  </IconLinkContainer>
)

IconLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}

export default IconLink
