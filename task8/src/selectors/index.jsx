// @flow
import { createSelector } from 'reselect'
import { SortMode } from '../actions'

const getMovies = state => state.results.movies
const getSortMode = state => state.results.sortMode

export const getSortedMovies = createSelector(
  [getMovies, getSortMode],
  (movies: Array<Object>, sortMode: string) => {
    if (sortMode === SortMode.RELEASE_DATE) {
      return movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    }
    return movies.sort((a, b) => b.vote_average - a.vote_average)
  }
)
