import React from 'react'
import PropTypes from 'prop-types'

import './ArtistTopMusics.css'

import Title from '../../common/Title'
import MusicList from '../../common/MusicList'

const ArtistTopMusics = ({ artistTopTracks = [] }) => (
  <div>
    <Title featuredText="TOP" text="TRACKS" classModifier="title-size pd-bt-20" />
    <MusicList artistTopTracks={artistTopTracks} />
  </div>
)

ArtistTopMusics.propTypes = {
  artistTopTracks: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ArtistTopMusics
