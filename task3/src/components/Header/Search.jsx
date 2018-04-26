import React, { Component } from 'react'

export default class Search extends Component {
  render () {
    return (
      <form className='search'>
        <div className='form-group'>
          <label className='white-font' htmlFor='inputSearch'>FIND YOUR MOVIE</label>
          <input className='form-control' id='inputSearch' type='text' placeholder='Stranger things' />
        </div>
        <div className='form-group'>
          <div className='searchByTrigger'>
            <span className='white-font'>SEARCH BY</span>
            <button className='search-by-button search-by-button-active btn btn-primary btn-sm'>TITLE</button>
            <button className='search-by-button btn btn-primary btn-sm'>DIRECTOR</button>
            <button type='submit' className='submit btn btn-primary btn-lg'>SEARCH</button>
          </div>
        </div>
      </form>
    )
  }
}
