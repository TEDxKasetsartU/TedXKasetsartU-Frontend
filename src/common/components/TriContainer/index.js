import PropTypes from 'prop-types'
import React from 'react'

const TriContainer = props => (
  <div className='row'>
    { props.elements.map((element) => (
      <div className='col-12 col-md'>
        {element}
      </div>
    ))}
  </div>
)

TriContainer.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.element)
}

export default TriContainer
