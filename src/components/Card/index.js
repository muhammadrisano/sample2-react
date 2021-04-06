import React, { Component } from 'react'
// import {withRouter} from 'react-router-dom'
class Card extends Component {
  render() {
    return (
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>
            <h6>author: {this.props.author}</h6>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            <button onClick={this.props.fireEvent}>detil</button>
          </div>
      </div>
    )
  }
}
Card.defaultProps = {
  title: 'tidak ada title',
  description: '',
  author: '',
  color: 'primary'
}
export default Card
