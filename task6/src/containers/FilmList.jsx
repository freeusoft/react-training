import React, { Component } from 'react'
import FilmListHeader from '../components/FilmList/FilmListHeader/FilmListHeader'
import Films from '../components/FilmList/Films'
import FilmListNotFound from '../components/pages/FilmListNotFound'
import Error from '../components/pages/Error'
import './FilmList.css'

class FilmList extends Component {
  render () {
    return (
      <div className='film-list'>
        { this.props.error
          ? <Error error={this.props.error} />
          : (this.props.not_found
            ? <FilmListNotFound /> : (
              <div>
                <FilmListHeader {...this.props} />
                <Films />
              </div>))
        }
      </div>
    )
  }
}

export default FilmList
