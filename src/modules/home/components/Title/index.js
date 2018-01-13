import PropTypes from 'prop-types'
import React from 'react'

const Title = (props) => <div>{props.title}</div>
Title.propTypes = {
  title: PropTypes.string
}

export default Title
