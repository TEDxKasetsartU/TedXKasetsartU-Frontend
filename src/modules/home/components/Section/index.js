import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SectionContainer = styled.div`
    padding: 5% 0;
    text-align: center;
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
    <SectionContainer color={props.backgroundColor}>
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