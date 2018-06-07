import React, { Component } from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
  footer: {
    height: '60px',
    background: {
      color: '#424242'
    },
    padding: {
      left: '50px',
      top: '17px'
    },
    font: {
      weight: 'bold',
      size: '14pt'
    }
  },
  redFont: {
    color: '#f55363'
  },
  envMode: {
    float: 'right',
    padding: {
      right: '50px'
    },
    color: 'gray'
  }
}

@injectSheet(styles)
export default class Footer extends Component {
  render () {
    const {classes, children} = this.props
    return (
      <div className={classes.footer}>
        <span className={classNames(classes.title, classes.redFont)}>MovieDB</span>
        <span className={classes.envMode}>{this.props.node_env === 'production' ? 'prod' : 'dev'}</span>
      </div>
    )
  }
}
