import React, { Component } from 'react'

class SearchResult extends Component {
  render () {
    return (
      <div className='content'>{`Content component with: ${this.props.content} (Functional component)`}</div>
    )
  }
}

export default SearchResult
