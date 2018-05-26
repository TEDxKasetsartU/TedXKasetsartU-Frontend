import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const SponsorLogo = styled.img`
  padding: 10px;
  filter: grayscale(25%);
  width: 100%;
  &:hover {
    filter: none;
    transition: all 300ms;
  }
  &:after {
    transition: transform 300ms ease-in-out;
  }
`

const SponsorContainer = styled.a`
  width: 100%;
`

const CardContainer = styled.div`
  margin: auto;
`

const SponsorCard = props => {
  const { year, imageSrc, name, url, size } = props
  return (
    <CardContainer className={size}>
      <SponsorContainer href={url}>
        <SponsorLogo src={loadImage('sponsors', year, imageSrc)} alt={name} />
      </SponsorContainer>
    </CardContainer>
  )
}

SponsorCard.propTypes = {
  year: PropTypes.number,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.string
}

export default SponsorCard
