import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../containers/Header'
import Footer from '../components/Footer/Footer'
import FilmList from '../containers/FilmList'
import { SearchMode } from '../actions'

class SearchResultModule extends Component {
  render () {
    return (
      <React.Fragment>
        <Header id={this.props.id} query={this.props.query} history={this.props.history} search={this.props.search} searchBy={this.props.searchBy} />
        <FilmList not_found={this.props.movies.length === 0} error={this.props.error} />
        <Footer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.results.movies || [],
  search: state.results.search || '',
  searchBy: state.results.searchBy || SearchMode.TITLE,
  error: state.results.error
})

export default connect(
  mapStateToProps
)(SearchResultModule)
