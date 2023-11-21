import React from 'react'
import img from '../Fotochk/Group 6 1.svg'
import style from '../Footer/Footer.module.css'

export const Logo = () => {
  return (
    <div className={style.logo}>
    <img className={img.foto} src={img} alt="Foto" ></img>
    </div>
  )
}