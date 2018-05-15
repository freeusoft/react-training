import React, { Component } from 'react'
import SearchResultItem from './SearchResultItem'
import { connect } from 'react-redux'

class SearchResultItems extends Component {
  render () {
    return (
      <div className='search-result-items row'>
        {
          this.props.movies.map((elm, i) =>
            <SearchResultItem key={i} film={elm} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.results.movies || []
})

export default connect(
  mapStateToProps
)(SearchResultItems)
