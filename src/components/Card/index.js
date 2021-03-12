import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
      <div class="card">
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
      </div>
    )
  }
}

export default Card
