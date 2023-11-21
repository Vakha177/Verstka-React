import React from "react";
import img from '../Fotochk/Ellipse 1.svg'
import style from '../Header/Header.module.css'
import logo from '../Fotochk/ounter.svg'

const Logo = () => {
        return (
        <div className={style.logo}>
        <img className={img.img} src={img} alt="foto" />
        <img className={img.logo} src={logo} alt="logo" />
        </div>
    )
}
export default Logo