import React from 'react'
import ScrollContainer from 'common/components/ScrollContainer'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const GridVolunteers = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 200px);
    grid-gap: 10px;
    grid-auto-flow: column;
    grid-auto-columns: 200px 200px;
    margin: 16px;
`

const Volunteers = props => (
  <Section
    backgroundColor={colors.black}
    titleColor={colors.white}
    dividerColor={colors.red}
    title='Volunteers'
    id='volunteers'
  >
    <ScrollContainer color='white'>
      <GridVolunteers>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>

        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>

        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>

        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
        <h1>sadsas</h1>
      </GridVolunteers>
    </ScrollContainer>
  </Section>
)

export default Volunteers
