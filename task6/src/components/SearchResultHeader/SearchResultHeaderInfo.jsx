import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchMode } from '../../actions'

class SearchResultHeaderInfo extends Component {
  render () {
    return (
      <div className='search-result-header-info'>
        { this.props.id ? `Films by ${this.props.searchBy.toLowerCase()}: ${this.props.search}` : this.props.movies.length + ' movies found' }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.results.movies || [],
  search: state.results.search || 'empty search',
  searchBy: state.results.searchBy || SearchMode.TITLE
})

export default connect(
  mapStateToProps
)(SearchResultHeaderInfo)
