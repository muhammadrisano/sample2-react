import React, { useState } from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import style from './style.module.css'
import Contoh from '../../../components/Contoh'

const Signup = (props) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [fullName, setFullname] = useState(true)
  console.log('isi props signup', props);
  const [form, setForm] = useState({
    email:'',
    password: '',
    fullName: ''
  })
 


  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const cobaFunction = ()=>{
    alert('hello')
  }

  const handleClick = () => {
    props.history.push('/signin')
    alert(`email adalah ${form.email} password adlah ${form.password} fullname adalah ${form.fullName}`)
  }

  const getValue = (value)=>{
    console.log(value);
  }
  return (
    <div className="container">
      <h1>halaman signup</h1>
      <div className={style.form}>
        <Input
          type="email"
          placeholder="silahkan masakan email"
          name="email"
          label="email"
          value={form.email}
          // inputChange={(e) => setEmail(e.target.value)}
          inputChange={(e) => handleChange(e)}
        />
        <Input
          type="password"
          placeholder="silahkan masakan password"
          name="password"
          label="password"
          value={form.password}
          inputChange={(e) => handleChange(e)}
        />
        <Input
          type="text"
          placeholder="silahkan masakan nama lengkap"
          name="fullName"
          label="Nama Lengkap"
          value={form.fullName}
          inputChange={(e) => handleChange(e)}
        />
        <Button
          onClick={handleClick}
          title="Simpan"
          color="primary"
        />
        <Contoh sendValue={getValue}/>

        <button onClick={cobaFunction}>paggil function</button>
      </div>
    </div>
  )
}

export default Signup