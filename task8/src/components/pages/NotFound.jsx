// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default class NotFound extends Component<Object, Object> {
  render () {
    return (
      <Link to='/'>
        <div className='not-found' />
      </Link>
    )
  }
}
