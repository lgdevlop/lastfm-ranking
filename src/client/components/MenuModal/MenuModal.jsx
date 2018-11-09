import React from 'react'
import PropTypes from 'prop-types'

import './MenuModal.css'

import ListArtists from '../../common/ListArtists'

// Obter estas dimensoes da searchbar
const inlineStyle = {
  top: '90px',
  left: '890px',
}

const MenuModal = (props) => {
  const { handleClick, listMatchedArtists, handleKeyPress } = props
  return (
    <div className="floating-menu" style={inlineStyle}>
      <div className="seta seta_cima" />
      <div
        className="floating-menu__container mr-10 mt-10"
        onClick={handleClick}
        role="button"
        onKeyPress={handleKeyPress}
        tabIndex="0"
      >
        <i className="floating-menu__close fas fa-window-close pd-bt-10" />
      </div>
      <ListArtists handleClick={handleClick} listMatchedArtists={listMatchedArtists} />
    </div>
  )
}

MenuModal.propTypes = {
  listMatchedArtists: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
}

MenuModal.defaultProps = {
  listMatchedArtists: [''],
}

export default MenuModal
