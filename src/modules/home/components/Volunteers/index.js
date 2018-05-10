import React from 'react'
import ScrollContainer from 'common/components/ScrollContainer'
import Section from 'modules/home/components/Section'
import VolunteerCard from 'modules/home/components/VolunteerCard'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const GridVolunteers = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 150px);
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-auto-columns: 150px 150px;
    padding: 30px;
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
        { props.volunteers.map(({ imageSrc, name, position }) => <VolunteerCard key={name} imageSrc={imageSrc} name={name} position={position} year={props.year} />)}
      </GridVolunteers>
    </ScrollContainer>
  </Section>
)

export default Volunteers
