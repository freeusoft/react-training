import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SearchResult from '../components/SearchResult/SearchResult'

export default class SearchResultModule extends Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        <Header {...this.props.match.params} history={this.props.history} />
        <SearchResult {...this.props.match.params} />
        <Footer />
      </React.Fragment>
    )
  }
}
