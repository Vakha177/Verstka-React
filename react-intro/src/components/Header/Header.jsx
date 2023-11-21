import React from 'react'
import Logo from './Lodo'
import { Menu } from './Menu'
import style from '../Header/Header.module.css'

export const Header = () => {
  return (
    <div className={style.Header}>
        <Logo />
        <Menu />
    </div>
  )
}