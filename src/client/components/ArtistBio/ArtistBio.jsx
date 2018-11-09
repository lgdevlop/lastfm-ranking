import React from 'react'
import PropTypes from 'prop-types'

import './ArtistBio.css'

import Title from '../../common/Title'
import AvatarArtist from '../../common/AvatarArtist'
import ArtistInfo from '../../common/ArtistInfo'

const ArtistBio = ({ artist }) => {
  const { name = '', image = '', summary = '' } = artist
  return (
    <div className="artist-bio">
      <Title featuredText={name} text="" classModifier="artist__title-size" />
      <AvatarArtist name={name} image={image} width="200px" height="200px" />
      <ArtistInfo summary={summary} />
    </div>
  )
}

ArtistBio.propTypes = {
  artist: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default ArtistBio
