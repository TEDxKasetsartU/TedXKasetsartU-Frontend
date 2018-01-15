import React from 'react'
import Icon from 'react-fontawesome'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Link = styled.a`
  &:after {
    display:block;
    content: '';
    border-bottom: solid 2px red;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`
const IconLink = props => (
  <Link href={props.href}>
    <Icon className='mr-2' name={props.name} size='lg' />
    {props.text}
  </Link>
)

IconLink.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}

export default IconLink
