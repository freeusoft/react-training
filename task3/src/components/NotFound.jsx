import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render () {
    return (
      <Link to='/'>
        <div className='not-found' />
      </Link>
    )
  }
}
