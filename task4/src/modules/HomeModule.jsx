import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SearchResultNotFound from '../components/SearchResult/SearchResultNotFound'

export default class HomeModule extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <SearchResultNotFound />
        <Footer />
      </React.Fragment>
    )
  }
}
