import PropTypes from 'prop-types'
import React from 'react'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const Video = styled.video`
    width: 100%;
    height: auto;
`

class PromoVideo extends React.PureComponent {
    state = {
      isPause: this.props.isLive
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
      const { year, isLive } = this.props
      return (
        <Video id='promo-vid' src={loadImage('promo', year, 'promo.mp4')} type='video/wmv' autoPlay={!isLive} onClick={this.changeVideoState} />
      )
    }
}

PromoVideo.propTypes = {
  year: PropTypes.number,
  isLive: PropTypes.bool,
  onPromoFinish: PropTypes.func
}

export default PromoVideo
