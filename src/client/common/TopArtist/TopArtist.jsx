import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './TopArtist.css'

const TopArtist = (props) => {
  const {
    artist,
    artistClass,
    imageClass,
    imageHeight,
    imageSource,
    imageWidth,
    quantityListeners,
  } = props
  return (
    <Link className="txt-dec_none" to={{ pathname: `/artist/${artist}` }}>
      <div className={artistClass}>
        <div className={imageClass}>
          <img src={imageSource} alt={artist} width={imageWidth} height={imageHeight} />
        </div>
        <div className="dados">
          <h2 className="typos-artista__titulo">{artist}</h2>
          <h3 className="typos-artista__dados">{quantityListeners} listeners</h3>
        </div>
      </div>
    </Link>
  )
}

TopArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  artistClass: PropTypes.string.isRequired,
  imageClass: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
  quantityListeners: PropTypes.string.isRequired,
}
export default TopArtist
