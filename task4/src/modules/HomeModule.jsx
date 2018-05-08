import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SearchResultNotFound from '../components/SearchResult/SearchResultNotFound'

export default class HomeModule extends Component {
  render () {
    return (
      <React.Fragment>
        <Header history={this.props.history} />
        <SearchResultNotFound />
        <Footer node_env={process.env.NODE_ENV} />
      </React.Fragment>
    )
  }
}
