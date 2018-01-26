import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 400ms;
`

const Card = styled.div`
  position: relative;
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  overflow-x: hidden;

  > img {
    filter: blur(0px);
    transition: transform 600ms, filter 200ms ease-in;
  }

  &:hover {
    ${Info} {
      opacity: 1;
    }

    > img {
      transform: scale(1.05);
      filter: blur(4px);
    }
  }
`

const Position = styled.span`
  font-size: 1.8em;
  font-style: italic;
  font-weight: 300;
`

const TeamCard = (props) => (
  <Card>
    <img className='img-fluid' src={props.src} alt={props.src} />
    <Info>
      <h2>{props.first}</h2>
      <h2>{props.last}</h2>
      &mdash;
      <Position>{props.position}</Position>
    </Info>
  </Card>
)

TeamCard.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  position: PropTypes.string,
  src: PropTypes.string
}

export default TeamCard
