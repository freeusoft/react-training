import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SearchResult from '../components/SearchResult/SearchResult'
import { SearchMode } from '../actions'

class SearchResultModule extends Component {
  render () {
    return (
      <React.Fragment>
        <Header {...this.props.match.params} history={this.props.history} search={this.props.search} searchBy={this.props.searchBy} />
        <SearchResult {...this.props.match.params} not_found={this.props.movies.length === 0} />
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.results.movies || [],
  search: state.results.search || '',
  searchBy: state.results.searchBy || SearchMode.TITLE
})

export default connect(
  mapStateToProps
)(SearchResultModule)
