export const API_URL = 'http://react-cdp-api.herokuapp.com'

export const SET_RESULTS_SORT_MODE = 'SET_RESULTS_SORT_MODE'
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'

export const SearchMode = {
  TITLE: 'TITLE',
  GENRES: 'GENRES'
}

export const SortMode = {
  RELEASE_DATE: 'RELEASE_DATE',
  VOTE_AVERAGE: 'VOTE_AVERAGE'
}

export const setResultsSortMode = sortMode => ({
  type: SET_RESULTS_SORT_MODE,
  sortMode
})

export const fetchMoviesSuccess = (data, search, searchBy, sortMode) => ({
  type: SEARCH_MOVIES_SUCCESS,
  movies: data,
  search,
  searchBy,
  sortMode
})

export const fetchMovieSuccess = (movie) => ({
  type: GET_MOVIE_SUCCESS,
  movie
})

export const searchMoviesFetch = (search, searchBy, sortMode = SortMode.RELEASE_DATE) => (dispatch) => {
  return fetch((`${API_URL}/movies?search=${encodeURIComponent(search.charAt(0).toUpperCase() + search.slice(1))}&searchBy=${searchBy.toLowerCase()}&sortBy=${sortMode.toLowerCase()}`))
    .then(response => response.json())
    .then(json => dispatch(fetchMoviesSuccess(json.data, search, searchBy, sortMode)))
}

export const getMovieFetch = (id) => (dispatch) => {
  return fetch((`${API_URL}/movies/${encodeURIComponent(id)}`))
    .then(response => response.json())
    .then(json => dispatch(fetchMovieSuccess(json)))
}
