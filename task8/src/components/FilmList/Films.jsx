// @flow
import React, { Component } from 'react'
import Film from './Film'
import { connect } from 'react-redux'
import { getSortedMovies } from '../../selectors'

class Films extends Component<Object, Object> {
  render () {
    return (
      <div className='films row'>
        {
          this.props.films.map((elm, i) =>
            <Film key={i} film={elm} />
          )
        }
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  films: getSortedMovies(state) || []
})

export default connect(
  mapStateToProps
)(Films)
