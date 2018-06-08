// @flow
import React, { Component } from 'react'
import './Error.css'

export default class Error extends Component<Object, Object> {
  render () {
    return (
      <div>
        <div className='error-text'>{this.props.error}</div>
        <div className='error' />
      </div>
    )
  }
}
