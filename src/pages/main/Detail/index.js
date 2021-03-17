import React, { Component } from 'react'
import Jumbutron from '../../../components/Jumbotron'
import axios from 'axios'

class Detail extends Component {
  state = {
    isLogin: false,
    name: 'risano akbar',
    film: {
      id:'',
      userId: '',
      body: '',
      title: ''
    }
  }
  handleLogin = () => {
  
    this.setState({
      isLogin: !this.state.isLogin
    })
    if(!this.state.isLogin){
      localStorage.setItem('id', 1111)
    }else{
      localStorage.removeItem('id')
    }
  }
  componentDidMount(){
    const id = this.props.match.params.idfilm
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
      const {body, id, title, userId} = res.data
      this.setState({
        film: {
          id: id,
          body: body,
          title: title,
          userId: userId
        }
      })
    })
  }

  render() {
    console.log('isi pros detail ', this.props);
    const {title, body, id} = this.state.film
    return (
      <div>
        <Jumbutron />
        <h3>id user: {localStorage.getItem('id')}</h3>
        <h1>halaman detail</h1>
        <h4>id nya adalah : {this.props.match.params.idfilm}</h4>
        <h1>title : {title}</h1>
        <h2>id: {id}</h2>
        <p>{body}</p>

        <button onClick={this.handleLogin}>{this.state.isLogin ? 'logout': 'login'}</button>
      </div>
    )
    
  }
}

export default Detail
