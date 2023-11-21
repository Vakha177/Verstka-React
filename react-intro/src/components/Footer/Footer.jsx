import React from "react";
import {Logo} from './Logo'
import { Menu } from "./Menu";
import style from '../Footer/Footer.module.css'

export const Footer = () => {
    return (
        <div className={style.Footer}>
            <Logo />
            <Menu/>
        </div>
    )
}