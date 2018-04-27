import React, { Component } from 'react'

export default class SearchResultItems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      film: props.film
    }
  }
  render () {
    return (
      <div className='search-result-item-info card'>
        <img className='search-result-item-info-poster' src={this.props.film.poster} />
        <div className='search-result-item-info'>
          <span className='search-result-item-name card-title'>{this.props.film.name}</span>
          <span className='search-result-item-year'>{this.props.film.year}</span>
        </div>
        <div className='search-result-item-genre card-text'>{this.props.film.genre}</div>
      </div>
    )
  }
}
