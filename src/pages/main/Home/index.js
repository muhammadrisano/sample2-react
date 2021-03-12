import React, { Component } from 'react'
import axios from 'axios'
import {Navbar, Header, Card} from '../../../components'


class Home extends Component {
  constructor(){
    super()

    this.state={
      films: [],
      isLoading: false
    }
  }


  componentDidMount(){
    this.setState({
      isLoading: true
    })
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      this.setState({
        films: res.data,
        isLoading: false
      })
    })
    .catch(()=>{
      alert('server bermasalah')
      this.setState({
        isLoading: false
      })
    })
  }
  render() {
    return (
      <>
      <Navbar/>
        <Header/>
      <div className="container">
        <div className="row">
          {this.state.isLoading ? <h1>loadingg.........</h1> : 
        this.state.films.map((item)=>
        <div className="col-md-3 mt-4">
          <Card title={item.title} description={item.body}/>
        </div>
        )}
          </div>
      </div>
      </>
    )
  }
}

export default Home
