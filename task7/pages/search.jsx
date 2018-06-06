import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchResultModule from '../src/modules/SearchResultModule'
import '../src/index.css'
import ErrorBoundary from '../src/ErrorBoundary'
import fetch from 'isomorphic-unfetch'
import { nextConnect } from '../src/store'
import '../src/App.css'
import '../src/vendor/bootstrap.min.css'
import { searchMoviesFetch, SearchMode, SortMode } from '../src/actions'

class Search extends Component {
  static async getInitialProps (ctx) {
    const {store, query} = ctx
    console.log('search', query.query)
    store.dispatch(searchMoviesFetch(query.query, SearchMode.TITLE, SortMode.RELEASE_DATE))
    return {query: query.query}
  }
  
  render() {
    return (
      <div className='app'>
        <link rel='stylesheet' href='/_next/static/style.css' />
        <ErrorBoundary>
          <SearchResultModule query={this.props.query}/>
        </ErrorBoundary>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Search)