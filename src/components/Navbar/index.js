import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link class="navbar-brand" to="#">Navbar</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="container">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Features</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
