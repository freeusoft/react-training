import React, { Component } from 'react'
import Search from './Search'

export default class Header extends Component {
  render () {
    return (
      <div className='header'>
        <span className='title red-font'>MovieDB</span>
        <Search />
      </div>
    )
  }
}
