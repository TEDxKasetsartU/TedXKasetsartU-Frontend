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
  const { year, sponsors: { platinum, gold, silver } } = props
  return (
    <Section
      backgroundColor={colors.black}
      titleColor={colors.white}
      dividerColor={colors.red}
      title='Partners'
      id='partners'
    >
      <SponsorsContainer className='row'>
        { platinum.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} size='col-6 col-sm-6 col-lg-4' />)}
      </SponsorsContainer>
      <SponsorsContainer className='row'>
        { gold.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} size='col-6 col-sm-6 col-lg-4' />)}
      </SponsorsContainer>
      <SponsorsContainer className='row'>
        { silver.map(({ url, imageSrc, name }) => <SponsorCard key={url} year={year} url={url} name={name} imageSrc={imageSrc} size='col-4 col-sm-4 col-lg-3' />)}
      </SponsorsContainer>
    </Section>
  )
}

Sponsors.propTypes = {
  sponsors: PropTypes.object,
  year: PropTypes.number
}

export default Sponsors
