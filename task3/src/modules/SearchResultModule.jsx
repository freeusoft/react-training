import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SearchResult from '../components/SearchResult/SearchResult'

export default class SearchResultModule extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <SearchResult />
        <Footer />
      </React.Fragment>
    )
  }
}
