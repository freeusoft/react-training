import React, { Component } from 'react'
import SearchResultHeader from '../SearchResultHeader/SearchResultHeader'
import SearchResultItems from './SearchResultItems'
import SearchResultNotFound from './SearchResultNotFound'
import './SearchResult.css'

class SearchResult extends Component {
  render () {
    return (
      <div className='search-result'>
        { this.props.not_found
          ? <SearchResultNotFound /> : (
            <div>
              <SearchResultHeader {...this.props} />
              <SearchResultItems />
            </div>)
        }
      </div>
    )
  }
}

export default SearchResult
