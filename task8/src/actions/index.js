// @flow
// $FlowFixMe
import 'isomorphic-fetch'

export const API_URL = 'http://react-cdp-api.herokuapp.com'

export const SET_RESULTS_SORT_MODE = 'SET_RESULTS_SORT_MODE'
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR'

export const SearchMode = {
  TITLE: 'TITLE',
  GENRES: 'GENRES'
}

export const SortMode = {
  RELEASE_DATE: 'RELEASE_DATE',
  VOTE_AVERAGE: 'VOTE_AVERAGE'
}

export const setResultsSortMode = (sortMode: string) => ({
  type: SET_RESULTS_SORT_MODE,
  sortMode
})

export const fetchMoviesSuccess = (data: any, search: string, searchBy: string, sortMode: string) => ({
  type: SEARCH_MOVIES_SUCCESS,
  movies: data,
  search,
  searchBy,
  sortMode
})

export const fetchMoviesError = (search: string, searchBy: string, sortMode: string) => ({
  type: SEARCH_MOVIES_ERROR,
  movies: [],
  search,
  searchBy,
  sortMode
})

export const fetchMovieSuccess = (movie: any) => ({
  type: GET_MOVIE_SUCCESS,
  movie
})

export const fetchMovieError = () => ({
  type: GET_MOVIE_ERROR,
  movie: {}
})

export const searchMoviesFetch = (search: string, searchBy: string, sortMode: string = SortMode.RELEASE_DATE) =>
  (dispatch: any) => {
    const encodedQuery = encodeURIComponent(search.charAt(0).toUpperCase() + search.slice(1))
    const result = window.fetch((`${API_URL}/movies?search=${encodedQuery}&searchBy=${searchBy.toLowerCase()}&sortBy=${sortMode.toLowerCase()}`))
      .then(response => response.json())
      .then(json => dispatch(fetchMoviesSuccess(json.data, search, searchBy, sortMode)))
      .catch(dispatch(fetchMoviesError(search, searchBy, sortMode)))
    return result
  }

export const getMovieFetch = (id: number) => (dispatch: any) =>
  window.fetch((`${API_URL}/movies/${encodeURIComponent(id.toString())}`))
    .then(response => response.json())
    .then(json => dispatch(fetchMovieSuccess(json)))
    .catch(dispatch(fetchMovieError()))
