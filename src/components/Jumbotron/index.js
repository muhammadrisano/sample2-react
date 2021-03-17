// import React from 'react'
// import style from './jumbotron.module.css'
// import {useParams} from 'react-router-dom'

// function Jumbotron(props) {
//   const {idfilm} = useParams() 
  
//   console.log('isi props', props);
//   return (
//     <div className={style.wrapper}>
      
//       <h3 className={style.hello}>ini jumbo tron id {idfilm}</h3>
//     </div>
//   )
// }

// export default Jumbotron

import React, {Component} from 'react'
import style from './jumbotron.module.css'
import { withRouter } from 'react-router-dom'

class Jumbotron extends Component{
  render(){
    console.log('isi props jumbo', this.props);
    return (
      <div className={style.wrapper}>
      <h3 className={style.hello}>ini jumbo tron id : {this.props.match.params.idfilm} </h3>
    </div>
    )
  }
}
export default withRouter(Jumbotron)
