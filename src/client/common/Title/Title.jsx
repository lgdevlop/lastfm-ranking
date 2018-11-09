import React from 'react'
import PropTypes from 'prop-types'

import './Title.css'

const Title = (props) => {

  const {classModifier = '', featuredText = '', text = ''} = props
  return (
    <div className={`titulo ${classModifier}`}>
      <span className="titulo_destaque">{featuredText}</span> {text}
    </div>
  )
}

Title.propTypes = {
  classModifier: PropTypes.string.isRequired,
  featuredText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Title
