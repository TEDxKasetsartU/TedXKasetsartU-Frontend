import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  position: relative;
  font-family: sans-serif;
  margin: 1em 0;
  padding-bottom: .6em;
  font-weight: bold;
  color: ${props => props.textColor};
  text-align: center;

  &::after {
    content: "";
    border-bottom: thick solid ${props => props.underlineColor};
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    margin-top: 20px;
  }
`

const SectionTitle = (props) => <Title {...props} >{ props.title }</Title>

SectionTitle.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string.isRequired,
  underlineColor: PropTypes.string.isRequired
}

export default SectionTitle
