import React from 'react'

import Logo from '../assets/img/logo'
import './AppLogo.css'

const AppLogo = () => {
  return (
    <div className="header__logo">
      {/* <img src="{logo}" alt="Logo SPOT.FM" width="201" height="70" /> */}
      <a href="/">
        <Logo />
      </a>
    </div>
  )
}

export default AppLogo
