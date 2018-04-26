import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <span className='red-font'>MovieDB</span>
        <span className='env-mode'>{process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}</span>
      </div>
    )
  }
}
