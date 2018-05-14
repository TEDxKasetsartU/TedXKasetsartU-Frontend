import React, { Fragment } from 'react'

import PromoVideo from 'modules/home/components/PromoVideo'
import PropTypes from 'prop-types'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const CoverContainer = styled.div`
    width: 100%;
`

class Cover extends React.PureComponent {
  state = {
    promoFinish: false
  }

  onPromoFinish = () => {
    this.setState({ promoFinish: true })
  }

  replay = () => {
    this.setState({ promoFinish: false })
  }

  render () {
    const { year } = this.props
    const { promoFinish } = this.state
    const alt = 'TEDxKasetsartU Cover'
    return (
      <Fragment>
        { promoFinish
          ? (
            <Fragment>
              <CoverContainer className='d-none d-md-block'>
                <img src={loadImage('cover', year, 'cover.png')} alt={alt} className='img-fluid' onClick={this.replay} />
              </CoverContainer>
              <CoverContainer className='d-block d-md-none'>
                <img src={loadImage('cover', year, 'mcover.png')} alt={alt} className='img-fluid' onClick={this.replay} />
              </CoverContainer>
            </Fragment>
          ) : <PromoVideo year={year} onPromoFinish={this.onPromoFinish} />
        }
      </Fragment>
    )
  }
}

Cover.propTypes = {
  year: PropTypes.number
}

export default Cover
