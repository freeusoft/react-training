import React, { Component } from 'react'
import './FilmInfo.css'
import { connect } from 'react-redux'

class FilmInfo extends Component {
  render () {
    const { poster_path: posterPath, title, vote_average: voteAverage, release_date: releaseDate, runtime, overview, genres } = this.props.movie
    return (
      <div className='film-info'>
        <img className='film-info-poster' src={posterPath} />
        <div className='film-info-description-wrapper'>
          <div className='film-info-name-and-rating-wrapper'>
            <span className='film-info-name'>{title}</span>
            { voteAverage > 0 && <span className='film-info-rating'>{voteAverage}</span> }
          </div>
          <div className='film-info-genre'>{genres && genres.join(', ')}</div>
          <div className='film-info-year-and-length-wrapper'>
            <span className='film-info-year'>{releaseDate && new Date(releaseDate).getFullYear()}</span>
            { runtime && <span className='film-info-length'>{runtime} min</span> }
          </div>
          <div className='film-info-description'>{overview}</div>
        </div>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  movie: state.result.movie || {}
})

export default connect(
  mapStateToProps
)(FilmInfo)
