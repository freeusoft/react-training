// @flow

import React, { Component } from 'react'

export default class FilmInfo extends Component<Object, Object> {
  constructor (props: any) {
    super(props)

    this.state = {
      film: props.film
    }
  }
 
  render () {
    return (
      <div className='film-info card'>
        <img className='film-info-poster' src={this.props.film.poster} />
        <div className='film-info'>
          <span className='film-name card-title'>{this.props.film.name}</span>
          <span className='film-year'>{this.props.film.year}</span>
        </div>
        <div className='film-genre card-text'>{this.props.film.genre}</div>
      </div>
    )
  }
}
