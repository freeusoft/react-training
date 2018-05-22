import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovieFetch } from '../../actions'

class SearchResultItem extends Component {
  itemClickHandler () {
    this.props.dispatch(getMovieFetch(this.props.film.id))
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <Link to={'/result/' + this.props.film.id} onClick={() => this.itemClickHandler()} className='search-result-item-link'>
        <div className='search-result-item card'>
          <img className='search-result-item-poster card-img-top' src={this.props.film.poster_path} />
          <div className='search-result-item-description'>
            <span className='search-result-item-name card-title'>{this.props.film.title}</span>
            <span className='search-result-item-year'>{new Date(this.props.film.release_date).getFullYear()}</span>
          </div>
          <div className='search-result-item-genre card-text'>{this.props.film.genres.join(', ')}</div>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem)
