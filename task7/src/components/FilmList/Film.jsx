import React, { Component } from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'
import { getMovieFetch } from '../../actions'

class Film extends Component {
  itemClickHandler () {
    this.props.dispatch(getMovieFetch(this.props.film.id))
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className='film-link'>
      <Link href={'/film/' + this.props.film.id}>
        <div className='film card'>
          <img className='film-poster card-img-top' src={this.props.film.poster_path} />
          <div className='film-description'>
            <span className='film-name card-title'>{this.props.film.title}</span>
            <span className='film-year'>{new Date(this.props.film.release_date).getFullYear()}</span>
          </div>
          <div className='film-genre card-text'>{this.props.film.genres.join(', ')}</div>
        </div>
      </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(Film)
