import React from 'react'
// import { useHistory } from 'react-router'
import style from './input.module.css'

function Input({ type, placeholder, name, label, value, inputChange}) {
  // const history = useHistory()
  // const pindaHalaman = ()=>{
  //   history.push('')
  // }
  return (

    <div className={style.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input value={value} name={name} id={name} type={type} placeholder={placeholder} onChange={(e) => inputChange(e)} />
    </div>
  )
}

export default Input
