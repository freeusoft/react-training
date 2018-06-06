import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchResultModule from '../src/modules/SearchResultModule'
import '../src/index.css'
import ErrorBoundary from '../src/ErrorBoundary'
import fetch from 'isomorphic-unfetch'
import { nextConnect } from '../src/store'
import '../src/App.css'
import '../src/vendor/bootstrap.min.css'
import { getMovieFetch } from '../src/actions'

class Search extends Component {
  static async getInitialProps (ctx) {
    const {store, query} = ctx
    console.log('film', query.id)
    store.dispatch(getMovieFetch(query.id))
    return {id: query.id}
  }
  
  render() {
    return (
      <div className='app'>
        <link rel='stylesheet' href='/_next/static/style.css' />
        <ErrorBoundary>
          <SearchResultModule id={this.props.id}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Search)