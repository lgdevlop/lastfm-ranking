import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

const SearchBar = (props) => {

  const {handleSubmit, handleChange} = props
  return (
    <form onSubmit={handleSubmit} className="header__bar">
      <input onChange={handleChange} className="header__search-bar typos-header" type="text" placeholder="Search all Artists"/>
    </form>
  )
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default SearchBar
