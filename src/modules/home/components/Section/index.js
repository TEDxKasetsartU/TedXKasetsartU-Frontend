import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div`
    padding: 5% 0;
    background-color: ${props => props.color};
`

const Divider = styled.hr`
    background-color: ${props => props.color};
    width: 2.5rem;
    height: 0.25rem;
`

const Title = styled.h3`
  font-weight: bold;
  color: ${props => props.color};
`

const Section = props => (
  <SectionContainer color={props.backgroundColor} className='d-flex align-items-center flex-column justify-content-center h-100'>
    <Title color={props.titleColor}>{props.title}</Title>
    <Divider color={props.dividerColor} />
    {props.children}
  </SectionContainer>
)

Section.propTypes = {
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  dividerColor: PropTypes.string,
  title: PropTypes.string
}

export default Section
