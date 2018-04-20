import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const ImageContainer = styled.div`
  height: 200px;
  width: 150px;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  display: inline-block;
`

const Image = styled.img`
  max-height: 100%;
  filter: ${props => props.isSelected ? 'none' : 'grayscale(100%)'};
  transform: translateX(-15%);
  &:hover {
    filter: none;
  }
`

export default class SpeakerCard extends React.PureComponent {
    onClick = () => {
      console.log('Click')
    }

    render () {
      const { speaker: {imageSrc}, year } = this.props
      return (
        <ImageContainer>
          <Image src={loadImage('speakers', year, imageSrc)} onClick={this.onClick} />
        </ImageContainer>
      )
    }
}
