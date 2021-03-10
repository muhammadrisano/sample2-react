import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../../components/Navbar'
import Header from '../../../components/Header'
import Card from '../../../components/Card'

class Home extends Component {
  constructor(){
    super()

    this.state={
      films: []
    }
  }


  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      this.setState({
        films: res.data
      })
    })
    .catch(()=>{
      alert('server bermasalah')
    })
  }
  render() {
    return (
      <>
      <Navbar/>
        <Header/>
      <div className="container">
        <div className="row">
        {this.state.films.map((item)=>
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
