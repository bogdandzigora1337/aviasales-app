import React from 'react'

import cl from './header.module.scss'
import svgImage from './images/Logo.svg'

export default function Header() {
  return (
    <div className={cl['header']}>
      <img className={cl['header__logo']} src={svgImage} alt="logo" />
    </div>
  )
}
