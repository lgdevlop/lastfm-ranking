import React from 'react'
import PropTypes from 'prop-types'

import './AvatarArtist.css'

const AvatarArtist = (props) => {
  const { name, image, width, height } = props

  return (
    <div className="imagem-artista pd-tp-10 pd-bt-10">
      <img className="imagem-artista" src={image} alt={name} width={width} height={height} />
    </div>
  )
}

AvatarArtist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default AvatarArtist
