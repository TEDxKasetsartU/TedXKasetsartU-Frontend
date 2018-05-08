import PropTypes from 'prop-types'
import React from 'react'
import Section from 'modules/home/components/Section'
import colors from 'common/mixins/colors'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const SponsorsContainer = styled.div`
  justify-content: center;
`

const Sponsors = props => (
  <Section
    backgroundColor={colors.black}
    titleColor={colors.white}
    dividerColor={colors.white}
    title='Partners'
    id='partners'
  >
    <SponsorsContainer className='row'>
      { props.sponsors.patron.map(({ url, imageSrc, name }, index) => <div className='col-6 col-sm-4 col-lg-2' key={index} ><a href={url}><img className='img-fluid' src={loadImage('sponsors', props.year, imageSrc)} alt={name} /></a></div>)}
    </SponsorsContainer>
    <SponsorsContainer className='row'>
      { props.sponsors.platinum.map(({ url, imageSrc, name }, index) => <div className='col-6 col-sm-4 col-lg-2' key={index} ><a href={url}><img className='img-fluid' src={loadImage('sponsors', props.year, imageSrc)} alt={name} /></a></div>)}
    </SponsorsContainer>
    <SponsorsContainer className='row'>
      { props.sponsors.gold.map(({ url, imageSrc, name }, index) => <div className='col-4 col-sm-3 col-lg-1' key={index} ><a href={url}><img className='img-fluid' src={loadImage('sponsors', props.year, imageSrc)} alt={name} /></a></div>)}
    </SponsorsContainer>
    <SponsorsContainer className='row'>
      { props.sponsors.friends.map(({ url, imageSrc, name }, index) => <div className='col-4 col-sm-3 col-lg-1' key={index} ><a href={url}><img className='img-fluid' src={loadImage('sponsors', props.year, imageSrc)} alt={name} /></a></div>)}
    </SponsorsContainer>
  </Section>
)

Sponsors.propTypes = {
  sponsors: PropTypes.object,
  year: PropTypes.number
}

export default Sponsors
