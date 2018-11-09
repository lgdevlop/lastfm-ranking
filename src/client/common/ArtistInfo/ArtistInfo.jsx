import React from 'react'
import PropTypes from 'prop-types'

import './ArtistInfo.css'

const ArtistInfo = ({ summary = '' }) => (
  <div>
    {/* <p>{props.info}</p> */}
    <p className="artist-info">{summary}</p>
  </div>
)

ArtistInfo.propTypes = {
  summary: PropTypes.string.isRequired,
}

export default ArtistInfo
