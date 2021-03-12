import React from 'react'
import style from './button.module.css'

function Button({title, color, onClick}) {
  return (
    <div>
      <button className={`${style.btn} ${style[color]}`} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button
