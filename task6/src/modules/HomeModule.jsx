import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class HomeModule extends Component {
  render () {
    return (
      <React.Fragment>
        <Header history={this.props.history} />
        <div className='find-movies-title'>Use search string to find movies.</div>
        <Footer node_env={process.env.NODE_ENV} />
      </React.Fragment>
    )
  }
}
