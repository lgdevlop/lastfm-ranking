import React from 'react'
import PropTypes from 'prop-types'

import './Artist.css'

import ArtistInfos from '../layout/ArtistInfos'

const Artist = ({ match }) => {
  const { artist } = match.params
  // console.log('artist: ', artist)
  // console.log('Artist page artist: ', artist)
  return (
    <div>
      <ArtistInfos artist={artist} />
    </div>
  )
}
Artist.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Artist
