import React, { Component } from 'react'

const SEARCH_BY_TITLE = 'title'
const SEARCH_BY_TITLE_PLACEHOLDER = 'Stranger things'
const SEARCH_BY_DIRECTOR = 'director'
const SEARCH_BY_DIRECTOR_PLACEHOLDER = 'Quentin Tarantino'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchBy: SEARCH_BY_TITLE,
      searchPlaceholder: SEARCH_BY_TITLE_PLACEHOLDER
    }
  }

  searchByClick (searchBy) {
    this.setState({searchBy, searchPlaceholder: (searchBy === SEARCH_BY_TITLE ? SEARCH_BY_TITLE_PLACEHOLDER : SEARCH_BY_DIRECTOR_PLACEHOLDER)})
  }

  onSubmitClick () {
    window.location.href = '/results'
  }

  render () {
    return (
      <div className='search'>
        <div className='form-group'>
          <label className='white-font' htmlFor='inputSearch'>FIND YOUR MOVIE</label>
          <input className='form-control' id='inputSearch' type='text' placeholder={this.state.searchPlaceholder} />
        </div>
        <div>
          <div className='searchByTrigger'>
            <span className='white-font'>SEARCH BY</span>
            <button className={'search-by-button btn btn-primary btn-sm ' + (this.state.searchBy === SEARCH_BY_TITLE ? 'search-by-button-active' : '')}
              onClick={() => { this.searchByClick(SEARCH_BY_TITLE) }}>TITLE</button>
            <button className={'search-by-button btn btn-primary btn-sm ' + (this.state.searchBy === SEARCH_BY_DIRECTOR ? 'search-by-button-active' : '')}
              onClick={() => { this.searchByClick(SEARCH_BY_DIRECTOR) }}>DIRECTOR</button>
            <button className='submit btn btn-primary btn-lg' onClick={this.onSubmitClick}>SEARCH</button>
          </div>
        </div>
      </div>
    )
  }
}
