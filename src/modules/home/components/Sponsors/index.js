import PropTypes from 'prop-types'
import React from 'react'
import Section from 'modules/home/components/Section'
import SponsorCard from 'modules/home/components/SponsorCard'
import colors from 'common/mixins/colors'
import styled from 'styled-components'

const SponsorsContainer = styled.div`
  justify-content: center;
`

const Sponsors = props => {
  const { year, sponsors: { patron, platinum, gold, friends } } = props
  return (
    <Section
      backgroundColor={colors.black}
      titleColor={colors.white}
      dividerColor={colors.red}
      title='Partners'
      id='partners'
    >
      <SponsorsContainer className='row'>
        { patron.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} />)}
      </SponsorsContainer>
      <SponsorsContainer className='row'>
        { platinum.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} />)}
      </SponsorsContainer>
      <SponsorsContainer className='row'>
        { gold.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} />)}
      </SponsorsContainer>
      <SponsorsContainer className='row'>
        { friends.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} />)}
      </SponsorsContainer>
    </Section>
  )
}

Sponsors.propTypes = {
  sponsors: PropTypes.object,
  year: PropTypes.number
}

export default Sponsors
