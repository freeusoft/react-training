import React, { Component } from 'react'
import Search from '../components/Header/Search'
import FilmInfo from '../components/Header/FilmInfo'
import Link from 'next/link'
import './Header.css'

export default class Header extends Component {
  render () {
    const { id, query, search } = this.props
    return (
      <div className='header'>
        <Link href='/'><span className='title red-font'>MovieDB</span></Link>
        { id && <Link href={`/search/${search}`}><button className='header-top-search-button btn btn-lg'>SEARCH</button></Link>}
        {!id
          ? <Search history={this.props.history} query={query} />
          : <FilmInfo />
        }
      </div>
    )
  }
}
