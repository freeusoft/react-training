import React, { Component } from 'react'
import SearchResultHeaderInfo from './SearchResultHeaderInfo'
import SearchResultHeaderSort from './SearchResultHeaderSort'

export default class SearchResult extends Component {
  render () {
    return (
      <div className='search-result-header'>
        <SearchResultHeaderInfo />
        <SearchResultHeaderSort />
      </div>
    )
  }
}
