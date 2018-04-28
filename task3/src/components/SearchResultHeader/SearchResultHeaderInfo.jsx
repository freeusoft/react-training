import React, { Component } from 'react'

export default class SearchResultHeaderInfo extends Component {
  render () {
    return (
      <div className='search-result-header-info'>
        { this.props.id ? 'Films by Quentin Tarantino' : '7 movies found' }
      </div>
    )
  }
}
