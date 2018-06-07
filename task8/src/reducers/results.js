import { SortMode } from '../actions'

const sortMovies = (movies, sortMode) => {
  if (sortMode === SortMode.RELEASE_DATE) {
    return movies.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
  }
  return movies.sort((a, b) => b.vote_average - a.vote_average)
}

const results = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: sortMovies(action.movies, action.sortMode),
        search: action.search,
        searchBy: action.searchBy,
        sortMode: action.sortMode,
        error: null
      }
    case 'SEARCH_MOVIES_ERROR':
      return {
        ...state,
        movies: sortMovies(action.movies, action.sortMode),
        search: action.search,
        searchBy: action.searchBy,
        sortMode: action.sortMode,
        error: 'Movies not found because server error, try again some later...'
      }
    case 'SET_RESULTS_SORT_MODE':
      return {
        ...state,
        movies: sortMovies([...state.movies], action.sortMode),
        sortMode: action.sortMode
      }
    default:
      return state
  }
}

export default results
