import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  border-left: thick solid red;
  padding-left: .5em;
  font-family: sans-serif;
  margin: 1em 0;
`

const SectionTitle = (props) => (
  <Title>
    { props.title }
    { props.subtitle && <span className='float-right'>{props.subtitle}</span> }
  </Title>
)

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionTitle
