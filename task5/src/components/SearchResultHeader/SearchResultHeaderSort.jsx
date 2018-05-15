import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setResultsSortMode, SortMode } from '../../actions'

class SearchResultHeaderSort extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sortBy: this.props.sortMode || SortMode.RELEASE_DATE
    }
  }

  sortByClick (sortMode) {
    this.setState({sortBy: sortMode})
    this.props.dispatch(setResultsSortMode(sortMode))
  }

  render () {
    return (
      <div className='search-result-header-sort'>
        Sort by <a href='#' className={'sort-by-release-date ' + (this.state.sortBy === SortMode.RELEASE_DATE ? 'active' : '')} onClick={() => this.sortByClick(SortMode.RELEASE_DATE)}>release date</a>
        <a href='#' className={'sort-by-rating ' + (this.state.sortBy === SortMode.VOTE_AVERAGE ? 'active' : '')} onClick={() => this.sortByClick(SortMode.VOTE_AVERAGE)}>rating</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  search: state.results.search,
  searchBy: state.results.searchBy,
  sortMode: state.results.sortMode
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultHeaderSort)
