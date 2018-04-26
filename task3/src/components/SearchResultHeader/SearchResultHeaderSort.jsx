import React, { Component } from 'react'

export default class SearchResultHeaderSort extends Component {
  render () {
    return (
      <div className='search-result-header-sort'>
        Sort by <a href='#' className='active'>release date</a> <a href='#'>rating</a>
      </div>
    )
  }
}
