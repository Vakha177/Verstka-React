import React from "react";
import style from '../Header/Header.module.css'

export const Menu = () => { 
    return (
        <div className={style.Nav}>
        <a href='/'><b>Главная</b></a>
        <a href='/'><b>О нас</b></a>
        <a href='/'><b>Контакты</b></a>
    </div>
    )
}