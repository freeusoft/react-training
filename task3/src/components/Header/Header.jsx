import React, { Component } from 'react'
import Search from './Search'
import FilmInfo from './FilmInfo'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    console.log('header', this.props)
    const { id } = this.props
    return (
      <div className='header'>
        <Link to='/'>
          <span className='title red-font'>MovieDB</span>
          {id && <button className='header-top-search-button btn btn-lg'>SEARCH</button>}
        </Link>
        {!id
          ? <Search />
          : <FilmInfo />
        }
      </div>
    )
  }
}
