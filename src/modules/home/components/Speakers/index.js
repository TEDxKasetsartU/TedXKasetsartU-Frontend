import PropTypes from 'prop-types'
import React from 'react'
import Section from 'modules/home/components/Section'
import SpeakerHeadline from 'modules/home/components/SpeakerHeadline'
import SpeakerSelector from 'modules/home/components/SpeakerSelector'
import YoutubePlayer from 'modules/home/components/YoutubePlayer'
import colors from 'common/mixins/colors'
import loadImage from 'common/utils/loadImage'
import styled from 'styled-components'

const SpeakerDetail = styled.div`
    padding: 0 10px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (min-width: 769px){
        width: 60%;
    }
`

const SpeakerPicture = styled.img`
  margin: 5% 0;
  width: 100%;
`

class Speakers extends React.PureComponent {
  state = { }

  componentWillMount () {
    if (!this.state.selectedSpeaker) {
      this.setState({ selectedSpeaker: this.props.speakers[0] })
    }
  }

  selectSpeaker = speaker => {
    this.setState({ selectedSpeaker: speaker })
  }

  render () {
    const { speakers, year } = this.props
    const { selectedSpeaker } = this.state
    const { topic, name, description, youtubeId, imageSrc, title } = selectedSpeaker
    return (
      <Section
        backgroundColor={colors.red}
        titleColor={colors.white}
        dividerColor={colors.white}
        title='Speakers'
        id='speakers'
      >
        <SpeakerSelector speakers={speakers} year={year} selectSpeaker={this.selectSpeaker} activeSpeaker={selectedSpeaker.name} />
        { selectedSpeaker &&
          (<SpeakerDetail>
            <SpeakerHeadline title={topic} author={name} description={description} />
            { youtubeId
              ? <YoutubePlayer id={youtubeId} title={title} />
              : <SpeakerPicture src={loadImage('speakers', year, imageSrc)} />
            }
          </SpeakerDetail>)
        }
      </Section>
    )
  }
}

Speakers.propTypes = {
  speakers: PropTypes.array,
  year: PropTypes.number
}

export default Speakers
