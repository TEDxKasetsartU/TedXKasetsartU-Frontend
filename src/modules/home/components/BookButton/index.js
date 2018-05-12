import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
    border-radius: 0rem;
    border-width: 1px;
    font-size: 1.25rem;
    margin: 5px 0;
    font-weight: bold;
`

const BookButton = props => {
  const { bookUrl } = props
  return (
    <Button className='btn btn-outline-danger' href={bookUrl} >Book Now</Button>
  )
}

BookButton.propTypes = {
  bookUrl: PropTypes.string
}

export default BookButton
