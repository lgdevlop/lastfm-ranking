import React from 'react'
import { Link } from 'react-router-dom'
import uuidv1 from 'uuid'
import PropTypes from 'prop-types'

import './ListArtists.css'

const ListArtists = (props) => {
  const { listMatchedArtists, handleClick } = props
  return (
    <div className="list-artist">
      <ul>
        {listMatchedArtists
          ? listMatchedArtists.map((artist) => (
              <li className="list-artist__item ml-10 mr-10 mt-10" key={uuidv1()}>
                <Link
                  onClick={handleClick}
                  className="list-artist__link"
                  to={{ pathname: `/artist/${encodeURIComponent(artist)}` }}
                >
                  {artist}
                </Link>
              </li>
            ))
          : ''}
      </ul>
    </div>
  )
}

ListArtists.propTypes = {
  listMatchedArtists: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired,
}

ListArtists.defaultProps = {
  listMatchedArtists: [''],
}

export default ListArtists
