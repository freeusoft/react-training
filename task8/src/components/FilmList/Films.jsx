// @flow
import React, { Component } from 'react'
import Film from './Film'
import { connect } from 'react-redux'

class Films extends Component<Object, Object> {
  render () {
    return (
      <div className='films row'>
        {
          this.props.movies.map((elm, i) =>
            <Film key={i} film={elm} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.results.movies || []
})

export default connect(
  mapStateToProps
)(Films)
