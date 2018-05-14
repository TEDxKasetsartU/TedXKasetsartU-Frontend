import Icon from 'react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 100%;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    opacity: ${props => props.isPause ? 0.5 : 0};
    transition: .5s ease;
    background-color: black;
`

const PlayContainer = styled.div`
  height: 100%;  
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Video = styled.video`
    width: 100%;
    height: auto;
`

class PromoVideo extends React.PureComponent {
    state = {
      isPause: true
    }

    changeVideoState = () => {
      const { isPause } = this.state
      const video = document.getElementById('promo-vid')
      if (isPause) video.play()
      else video.pause()
      this.setState({ isPause: !isPause })
    }

    componentDidMount () {
      const { onPromoFinish } = this.props
      const video = document.getElementById('promo-vid')
      video.onended = onPromoFinish
    }

    render () {
      const { year } = this.props
      const { isPause } = this.state
      return (
        <Container onClick={this.changeVideoState} >
          <Video id='promo-vid' src={loadImage('promo', year, 'promo.mp4')} type='video/wmv' />
          <Overlay isPause={isPause}>
            <PlayContainer>
              <Icon name='play' size='5x' />
            </PlayContainer>
          </Overlay>
        </Container>
      )
    }
}

PromoVideo.propTypes = {
  year: PropTypes.number,
  onPromoFinish: PropTypes.func
}

export default PromoVideo
