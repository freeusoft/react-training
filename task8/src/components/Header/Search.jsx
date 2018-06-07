import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMoviesFetch, SearchMode, SortMode } from '../../actions'

const SEARCH_BY_TITLE_PLACEHOLDER = 'Stranger things'
const SEARCH_BY_GENRES_PLACEHOLDER = 'Action'

class Search extends Component {
  constructor (props) {
    super(props)
    const searchBy = this.props.searchBy || SearchMode.TITLE
    const sortMode = this.props.sortMode || SortMode.RELEASE_DATE
    this.state = {
      searchBy: searchBy,
      searchPlaceholder: searchBy === SearchMode.TITLE ? SEARCH_BY_TITLE_PLACEHOLDER : SEARCH_BY_GENRES_PLACEHOLDER,
      searchQuery: this.props.query || '',
      sortMode: sortMode
    }
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    nextProps.dispatch(searchMoviesFetch(nextProps.query || '', prevState.searchBy, nextProps.sortMode || prevState.sortMode))
    return null
  }

  searchByClick (searchBy) {
    this.setState({searchBy, searchPlaceholder: (searchBy === SearchMode.TITLE ? SEARCH_BY_TITLE_PLACEHOLDER : SEARCH_BY_GENRES_PLACEHOLDER)})
  }

  onSubmitClick () {
    this.props.dispatch(searchMoviesFetch(this.state.searchQuery, this.state.searchBy, this.props.sortMode || this.state.sortMode))
    this.props.history.push(`/search/${this.state.searchQuery}`)
  }

  onSearchChangeHandler (event) {
    this.setState({searchQuery: event.target.value})
  }

  handleInputKeyPress (e) {
    if (e.key === 'Enter') {
      this.onSubmitClick()
    }
  }

  render () {
    return (
      <div className='search'>
        <div className='form-group'>
          <label className='white-font' htmlFor='inputSearch'>FIND YOUR MOVIE</label>
          <input className='form-control' id='inputSearch' type='text' placeholder={this.state.searchPlaceholder}
            onChange={this.onSearchChangeHandler} defaultValue={this.props.query} onKeyPress={(e) => this.handleInputKeyPress(e)} />
        </div>
        <div>
          <div className='searchByTrigger'>
            <span className='white-font'>SEARCH BY</span>
            <button className={'search-by-title search-by-button btn btn-primary btn-sm ' + (this.state.searchBy === SearchMode.TITLE ? 'search-by-button-active' : '')}
              onClick={() => { this.searchByClick(SearchMode.TITLE) }}>TITLE</button>
            <button className={'search-by-director search-by-button btn btn-primary btn-sm ' + (this.state.searchBy === SearchMode.GENRES ? 'search-by-button-active' : '')}
              onClick={() => { this.searchByClick(SearchMode.GENRES) }}>GENRES</button>
            <button className='submit btn btn-primary btn-lg' onClick={() => this.onSubmitClick()}>SEARCH</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sortMode: state.results.sortMode,
  search: state.results.search,
  searchBy: state.results.searchBy
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
