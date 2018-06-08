// @flow
import React, { Component } from 'react'
import Search from '../components/Header/Search'
import FilmInfo from '../components/Header/FilmInfo'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component<Object, Object> {
  render () {
    const { id, query, search } = this.props
    return (
      <div className='header'>
        <Link to='/'>
          <span className='title red-font'>MovieDB</span>
        </Link>
        <Link to={`/search/${search}`}>
          {id && <button className='header-top-search-button btn btn-lg'>SEARCH</button>}
        </Link>
        {!id
          ? <Search history={this.props.history} query={query} />
          : <FilmInfo />
        }
      </div>
    )
  }
}
