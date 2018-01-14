import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Card = styled.div.attrs({
  className: 'card'
})`
  filter: brightness(0.9);
  border: none;
  border-bottom: 2px solid lightgray;
  transition: all 300ms;

  &:hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
    filter: brightness(1.05);
  }

  @media (max-width: 768px) {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
    filter: brightness(1.05);
  }
`

const CardImage = styled.img.attrs({
  className: 'card-img-top'
})`
  border-radius: 0;
`

const CardTitle = styled.div.attrs({
  className: 'card-title'
})`
  border-bottom: medium solid rgba(0, 0, 0, 0.7);
`

const SpeakerCard = (props) => (
  <Card>
    <CardImage src={props.src} alt={props.src} />
    <div className='card-body p-3'>
      <CardTitle>
        <h5>{ props.name }</h5>
      </CardTitle>
      <p className='card-text'>{ props.topic }</p>
    </div>
  </Card>
)

SpeakerCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  topic: PropTypes.string
}

export default SpeakerCard
