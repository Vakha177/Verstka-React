import React from 'react'
import style from '../Footer/Footer.module.css'

export const Menu = () => {
  return (
    <div className={style.Nav}>
        <a href='/'><b>Партнерам</b></a>
        <a href='/'><b>Разработчикам</b></a>
        <a href='/'><b>Вакансии</b></a>
        <div className='text'>ООО “интукод”, 2020г.</div>
    </div>
  )
}