import React, { Component } from 'react'
import SearchResultHeader from '../SearchResultHeader/SearchResultHeader'
import SearchResultItems from './SearchResultItems'
import SearchResultNotFound from './SearchResultNotFound'

class SearchResult extends Component {
  componentWillReceiveProps (props) {
    if (this.props.not_found) {
      this.setState({'not_found': true})
    }
  }

  render () {
    const notFound = false
    return (
      <div className='search-result'>
        { notFound
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
