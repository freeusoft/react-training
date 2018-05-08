import React, { Component } from 'react'
import Search from './Search'
import FilmInfo from './FilmInfo'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  render () {
    const { id } = this.props
    return (
      <div className='header'>
        <Link to='/'>
          <span className='title red-font'>MovieDB</span>
          {id && <button className='header-top-search-button btn btn-lg'>SEARCH</button>}
        </Link>
        {!id
          ? <Search history={this.props.history} />
          : <FilmInfo />
        }
      </div>
    )
  }
}
