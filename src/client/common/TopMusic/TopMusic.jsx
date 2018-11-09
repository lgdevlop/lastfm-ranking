import React from 'react'
import PropTypes from 'prop-types'

import './TopMusic.css'

// props que recebera
// const imagem = ''
// const artista = ''
// const musica = ''

const TopMusic = (props) => {

  const {image, artist, music} = props

  return (
    <div className="container-dados-musica brd-top brd-botm">
      <div className="imagem-artista pd-tp-10 pd-bt-10">
        <img className="imagem-artista" src={image} alt={artist} width="64" height="64" />
      </div>
      <div className="dados-musica pd-lf-10 pd-tp-10 pd-bt-10">
        <h2 className="typos-artista__titulo">{music}</h2>
        <h3 className="typos-artista__dados">{artist}</h3>
      </div>
    </div>
  )
}

TopMusic.propTypes = {
  artist: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default TopMusic
