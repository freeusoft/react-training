// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const styles = {
  filmInfo: {
    paddingTop: '50px',
    height: '430px',
    color: 'silver'
  },
  filmInfoPoster: {
    float: 'left',
    marginRight: '50px',
    width: '200px'
  },
  filmInfoDescriptionWrapper: {
    paddingTop: '20px',
    float: 'left',
    width: '500px',
    fontWeight: 'bold'
  },
  filmInfoNameAndRatingWrapper: {
    width: '100%'
  },
  filmInfoName: {
    color: '#f55363',
    fontSize: '20pt',
    fontWeight: 'bold',
    marginRight: '50px'
  },
  filmInfoRating: {
    color: 'green',
    fontSize: '12pt',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50%',
    textAlign: 'center',
    padding: '6px',
    fontWeight: 'normal',
    position: 'relative',
    top: '-4px'
  },
  filmInfoYearAndLengthWrapper: {
    color: 'white',
    marginTop: '10px',
    marginBottom: '20px'
  },
  filmInfoYear: {
    marginRight: '30px'
  },
  filmInfoDescription: {
    marginBottom: '20px'
  },
  filmInfoDirector: {
    fontWeight: 'normal',
    fontSize: '10pt',
    marginBottom: '10px'
  },
  filmInfoCast: {
    fontWeight: 'normal',
    fontSize: '10pt'
  },
  filmInfoError: {
    textAlign: 'center',
    color: 'red',
    fontSize: '16pt'
  }
}

class FilmInfo extends Component<Object, Object> {
  getFilmInfo () {
    const { classes } = this.props
    const { poster_path: posterPath, title, vote_average: voteAverage, release_date: releaseDate, runtime, overview, genres } = this.props.movie
    return (
      <div>
        <img className={classes.filmInfoPoster} src={posterPath} />
        <div className={classes.filmInfoDescriptionWrapper}>
          <div className={classes.filmInfoNameAndRatingWrapper}>
            <span className={classes.filmInfoName}>{title}</span>
            { voteAverage > 0 && <span className={classes.filmInfoRating}>{voteAverage}</span> }
          </div>
          <div className={classes.filmInfoGenre}>{genres && genres.join(', ')}</div>
          <div className={classes.filmInfoYearAndLengthWrapper}>
            <span className={classes.filmInfoYear}>{releaseDate && new Date(releaseDate).getFullYear()}</span>
            { runtime && <span className={classes.filmInfoLength}>{runtime} min</span> }
          </div>
          <div className={classes.filmInfoDescription}>{overview}</div>
        </div>
      </div>
    )
  }

  render () {
    console.log(this.props)
    const { classes } = this.props
    return (
      <div className={classes.filmInfo}>
        { this.props.error
          ? <div className='film-info-error'>{this.props.error}</div>
          : this.getFilmInfo()
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.result.movie || {},
  error: state.result.error
})

export default injectSheet(styles)(connect(
  mapStateToProps
)(FilmInfo))
