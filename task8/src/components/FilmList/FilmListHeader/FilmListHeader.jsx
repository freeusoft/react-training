// @flow
import React, { Component } from 'react'
import FilmListHeaderInfo from './FilmListHeaderInfo'
import FilmListHeaderSort from './FilmListHeaderSort'
import './FilmListHeader.css'

export default class FilmListHeader extends Component<Object, Object> {
  render () {
    return (
      <div className='film-list-header'>
        <FilmListHeaderInfo {...this.props} />
        { !this.props.id && <FilmListHeaderSort /> }
      </div>
    )
  }
}
