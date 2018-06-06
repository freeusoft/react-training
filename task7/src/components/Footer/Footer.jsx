import React, { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <span className='title red-font'>MovieDB</span>
        <span className='env-mode'>{this.props.node_env === 'production' ? 'prod' : 'dev'}</span>
      </div>
    )
  }
}
