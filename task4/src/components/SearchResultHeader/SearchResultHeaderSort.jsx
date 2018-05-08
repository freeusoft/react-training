import React, { Component } from 'react'

export default class SearchResultHeaderSort extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sortBy: 'releaseDate'
    }
  }

  sortByClick (sort) {
    this.setState({sortBy: sort})
  }

  render () {
    return (
      <div className='search-result-header-sort'>
        Sort by <a href='#' className={'sort-by-release-date ' + (this.state.sortBy === 'releaseDate' ? 'active' : '')} onClick={() => this.sortByClick('releaseDate')}>release date</a>
        <a href='#' className={'sort-by-rating ' + (this.state.sortBy === 'rating' ? 'active' : '')} onClick={() => this.sortByClick('rating')}>rating</a>
      </div>
    )
  }
}
