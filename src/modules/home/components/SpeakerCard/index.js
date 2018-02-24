import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const ImageContainer = styled.div`
  padding: 0;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
`

const Image = styled.img`
  max-height: 100%;
  transform: translateX(-25%);
  filter: ${props => props.isSelected ? 'none' : 'grayscale(100%)'};
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
        <ImageContainer className='col-md'>
          <Image src={loadImage('speakers', year, imageSrc)} onClick={this.onClick} />
        </ImageContainer>
      )
    }
}
