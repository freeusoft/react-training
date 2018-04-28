import React, { Component } from 'react'

export default class FilmInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      film: {id: 1, name: 'Kill bill', year: 2004, genre: 'Action & Adventure', director: 'Quentin Tarantino', poster: 'https://images-na.ssl-images-amazon.com/images/I/41qSUP7S3XL._AC_UL320_SR228,320_.jpg', rating: 4.2, length: 120, description: 'A former assassin knwon as The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.', cast: 'Uma Thurman, David Carradine, Daryl Hannah'}
    }
  }

  render () {
    return (
      <div className='film-info'>
        <img className='film-info-poster' src={this.state.film.poster} />
        <div className='film-info-description-wrapper'>
          <div className='film-info-name-and-rating-wrapper'>
            <span className='film-info-name'>{this.state.film.name}</span>
            <span className='film-info-rating'>{this.state.film.rating}</span>
          </div>
          <div className='film-info-genre'>{this.state.film.genre}</div>
          <div className='film-info-year-and-length-wrapper'>
            <span className='film-info-year'>{this.state.film.year}</span>
            <span className='film-info-length'>{this.state.film.length} min</span>
          </div>
          <div className='film-info-description'>{this.state.film.description}</div>
          <div className='film-info-director'>Director: {this.state.film.director}</div>
          <div className='film-info-cast'>Cast: {this.state.film.cast}</div>
        </div>
      </div>
    )
  }
}
