import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

import TopMusic from '../../common/TopMusic'

const TopMusics = (props) => {
  const { musics } = props
  return (
    <div className="container-musica mr-42 ml-42">
      {musics
        ? musics.map((music) => (
            <TopMusic
              key={uuidv1()}
              music={music.music}
              artist={music.artist}
              image={music.image}
            />
          ))
        : ''}
    </div>
  )
}

TopMusics.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TopMusics
