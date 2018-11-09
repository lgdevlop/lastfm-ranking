import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

import './MusicList.css'

const MusicList = (props) => {
  // let musics = ['I Bet You Look Good on the Dancefloor', 'Mardy Bum', 'Fake Tales of San Francisco']
  const { artistTopTracks = [] } = props
  return (
    <div>
      <ul>
        {artistTopTracks
          ? artistTopTracks.map((music) => (
              <li className="music-list" key={uuidv1()}>
                {music}
              </li>
            ))
          : ''}
      </ul>
    </div>
  )
}

MusicList.propTypes = {
  artistTopTracks: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MusicList
