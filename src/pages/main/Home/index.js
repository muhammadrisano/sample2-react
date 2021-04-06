import React, { Component } from 'react'
import axios from 'axios'
import {Navbar, Header} from '../../../components'
import qs from 'query-string'


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
      console.log(this.state.films);
    })
    .catch(()=>{
      alert('server bermasalah')
      this.setState({
        isLoading: false
      })
    })
  }
  handelDetail = (id)=>{
    this.props.history.push(`/detail/${id}`)
  }
  render() {
    console.log('isi props', this.props);
    const dataquery = qs.parse(this.props.location.search)
    console.log(dataquery);
    return (
      <>
      <Navbar/>
        <Header/>
      <div className="container">
        <div className="row">
            <h2>id user = {dataquery.idUser}</h2>
          {this.state.isLoading ? <h1>loadingg.........</h1> : 
        this.state.films.map((item)=>
          <div className="col-md-3 mt-4" key={item.id}>
          
          {/* <Card
          title={item.title}
          description={item.body}
          fireEvent={() => this.handelDetail(item.id)}
          
          /> */}
        </div>
        )}
          </div>
      </div>
      </>
    )
  }
}

export default Home
