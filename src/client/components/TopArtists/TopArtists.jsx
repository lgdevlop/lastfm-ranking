import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

import './TopArtists.css'

import TopArtist from '../../common/TopArtist'

const TopArtists = ({ artistsBig, artistsSmall }) => {
  const listartistsBig = artistsBig
    ? artistsBig.map((artist) => (
        <TopArtist
          key={uuidv1()}
          artistClass="artista_grande"
          imageClass="imagem_grande"
          imageSource={artist.image}
          artist={artist.name}
          imageWidth="100%"
          imageHeight="100%"
          quantityListeners={artist.listeners}
        />
      ))
    : ''
  const listartistsSmall = artistsSmall
    ? artistsSmall.map((artist) => (
        <TopArtist
          key={uuidv1()}
          artistClass="artista"
          imageClass="imagem"
          imageSource={artist.image}
          artist={artist.name}
          imageWidth="100%"
          imageHeight="100%"
          quantityListeners={artist.listeners}
        />
      ))
    : ''

  return (
    <div>
      <div className="container-artistas_destaque ml-32 mr-31">{listartistsBig}</div>
      <div className="container-artistas ml-32 mr-31">{listartistsSmall}</div>
    </div>
  )
}

TopArtists.propTypes = {
  artistsBig: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistsSmall: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TopArtists
