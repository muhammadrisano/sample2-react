import React, { Component } from 'react'

class Detail extends Component {
  state = {
    isLogin: false,
    name: 'risano akbar',
  }
  handleLogin = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    
    if (this.state.isLogin){
      
    }
    return (
      <div>
        <div></div>
        {this.state.isLogin ? <h1>{this.state.name}</h1>: <h1>silahkan login</h1>}
        <button onClick={this.handleLogin}>{this.state.isLogin ? 'logout': 'login'}</button>
      </div>
    )
    
  }
}

export default Detail
