import React, { Component } from 'react'
import Header from './Header'

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header>
          <p>I'am on every page</p>
          {this.props.children}
        </Header>
      </div>
    )
  }
}
