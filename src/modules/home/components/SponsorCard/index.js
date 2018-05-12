import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const SponsorLogo = styled.img`
  padding: 10px;
  filter: grayscale(25%);
  &:hover {
    filter: none;
    transition: all 300ms;
  }
  &:after {
    transition: transform 300ms ease-in-out;
  }
`

const CardContainer = styled.div`
  margin: auto;
`

const SponsorCard = props => {
  const { year, imageSrc, name, url } = props
  return (
    <CardContainer className='col-6 col-sm-4 col-lg-3'>
      <a href={url}>
        <SponsorLogo className='img-fluid' src={loadImage('sponsors', year, imageSrc)} alt={name} />
      </a>
    </CardContainer>
  )
}

SponsorCard.propTypes = {
  year: PropTypes.number,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string
}

export default SponsorCard
