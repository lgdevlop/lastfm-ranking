import React from 'react'
import PropTypes from 'prop-types'

import './LinkButton.css'

const LinkButton = (props) => {
  // function clicado(event) {
  //   // console.log(event)
  //   event.preventDefault()
  //   // console.log(event.target)
  //   // console.log(event.currentTarget)
  //   console.log(event.currentTarget.attributes['name'].value)
  // }

  // ${(botaoAtivo === 1) ? 'nav-control__link_selecionado' : ''}

  const {name, handleClick} = props

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a name={name} className="nav-control__anchor" onClick={handleClick} href="#">
      <div className="nav-control__link" />
    </a>
  )
}

LinkButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default LinkButton
