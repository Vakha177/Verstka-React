import React from "react";
import style from '../Main/Main.module.css'

export const MainContent = () => {
    return (
      <>
      <div className = {style.Number} >141</div>
      <div className={style.Btn}>
      <button className={style.oneButton}>Увеличить</button>
      <button className={style.twoButton}>Уменьшить</button> 
      <button className={style.tryButton}>Сбросить</button>
      </div>
      </>
    )
  }