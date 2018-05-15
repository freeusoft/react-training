import fetch from 'isomorphic-fetch'
const API_URL = 'http://react-cdp-api.herokuapp.com'

export const SearchMode = {
  TITLE: 'TITLE',
  GENRES: 'GENRES'
}

export const SortMode = {
  RELEASE_DATE: 'RELEASE_DATE',
  VOTE_AVERAGE: 'VOTE_AVERAGE'
}

export const setResultsSortMode = sortMode => ({
  type: 'SET_RESULTS_SORT_MODE',
  sortMode
})

export const searchMoviesFetch = (search, searchBy, sortMode = SortMode.RELEASE_DATE) => (dispatch) => {
  return fetch((`${API_URL}/movies?search=${encodeURIComponent(search.charAt(0).toUpperCase() + search.slice(1))}&searchBy=${searchBy.toLowerCase()}&sortBy=${sortMode.toLowerCase()}`))
    .then(response => response.json())
    .then(json => dispatch({ type: 'SEARCH_MOVIES', movies: json.data, search, searchBy, sortMode }))
}

export const getMovieFetch = (id) => (dispatch) => {
  return fetch((`${API_URL}/movies/${encodeURIComponent(id)}`))
    .then(response => response.json())
    .then(json => dispatch({ type: 'GET_MOVIE', movie: json }))
}
