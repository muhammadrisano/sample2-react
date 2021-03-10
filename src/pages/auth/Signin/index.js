import React, { Component } from 'react'
// css global
// import './signin.css'
// css module/scop
import style from './signin.module.css'

class Signin extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e)=>{
    e.preventDefault()
    const password = 'risano'
    const email= 'risano@gmail.com'
    if (this.state.password === password && this.state.email === email){
      this.props.history.push('/')
    }else{
      alert('email anda salah')
    }
  }
  render() {
    return (
      <div className="container">
        <h1>sign in</h1>
        <div className={style['wrapper-form']}>
          <h4>silahkan login disini</h4>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChange} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" value={this.state.password} className="form-control" id="exampleInputPassword1" onChange={this.handleChange} />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signin
