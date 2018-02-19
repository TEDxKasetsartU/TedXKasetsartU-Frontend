import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const TitleText = styled.h3`
  font-weight: bold;
  color: ${props => props.color};
`

const Title = (props) => (
  <TitleText color={props.color}>{props.title}</TitleText>
)
Title.propTypes = {
  title: PropTypes.string,
  color: PropTypes.color
}

export default Title
