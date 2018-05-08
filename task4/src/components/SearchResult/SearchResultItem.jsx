import React, { Component } from 'react'

export default class SearchResultItem extends Component {
  constructor (props) {
    super(props)
  }

  itemClickHandler () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <a href={'/result/' + this.props.film.id} onClick={this.itemClickHandler} className='search-result-item-link'>
        <div className='search-result-item card'>
          <img className='search-result-item-poster card-img-top' src={this.props.film.poster} />
          <div className='search-result-item-description'>
            <span className='search-result-item-name card-title'>{this.props.film.name}</span>
            <span className='search-result-item-year'>{this.props.film.year}</span>
          </div>
          <div className='search-result-item-genre card-text'>{this.props.film.genre}</div>
        </div>
      </a>
    )
  }
}
