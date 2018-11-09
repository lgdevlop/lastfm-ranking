import React from 'react'
import PropTypes from 'prop-types'

import './CarrouselControl.css'
import LinkButton from '../LinkButton'

const CarrouselControl = (props) => {

  const { buttonsQuantity } = props

  const elements = (btnsQuantity) => {
    const buttons = []
    /*  eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }]  */
    for (let i = 0; i < btnsQuantity; i++) {
      buttons.push(<LinkButton handleClick={props.handleClick} name={i} key={i}/>)
    }
    return buttons
  }

  return (
    <div className="mais-escutadas__nav-control pd-tp-20">
      <div className="nav-control">
      {/* quantidadeBotoes ? quantidadeBotoes.forEach(botao => ( */}
        {/* <LinkButton /> */}
        {elements(buttonsQuantity)}
      {/* )) : '' */}
      </div>
    </div>
  )
}

CarrouselControl.propTypes = {
  handleClick: PropTypes.func.isRequired,
  buttonsQuantity: PropTypes.number.isRequired
}

export default CarrouselControl
