import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './index.js'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { SET_RESULTS_SORT_MODE, SEARCH_MOVIES_SUCCESS, GET_MOVIE_SUCCESS, SortMode, SearchMode, API_URL } from './index.js'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  test('should set results sort mode', () => {
    const sortMode = SortMode.VOTE_AVERAGE
    const expectedAction = {
      type: SET_RESULTS_SORT_MODE,
      sortMode
    }
    expect(actions.setResultsSortMode(sortMode)).toEqual(expectedAction)
  })

  test('should set movies results', () => {
    const movies = [{ id: 1 }, { id: 2 }]
    const search = 'Kill bill'
    const searchBy = SearchMode.TITLE
    const sortMode = SortMode.VOTE_AVERAGE

    const expectedAction = {
      type: SEARCH_MOVIES_SUCCESS,
      movies,
      search,
      searchBy,
      sortMode
    }
    expect(actions.fetchMoviesSuccess(movies, search, searchBy, sortMode)).toEqual(expectedAction)
  })

  test('shouls set movie result', () => {
    const movie = { id: 1, title: 'Kill bill' }
    const expectedAction = {
      type: GET_MOVIE_SUCCESS,
      movie
    }
    expect(actions.fetchMovieSuccess(movie)).toEqual(expectedAction)
  })

})

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  test('creates SEARCH_MOVIES_SUCCESS when fetching movies has been done', () => {
    const movies = [{ id: 1 }, { id: 2 }]
    const search = 'Kill bill'
    const searchBy = SearchMode.TITLE
    const sortMode = SortMode.RELEASE_DATE

    const expectedActions = [{
      type: SEARCH_MOVIES_SUCCESS,
      movies,
      search,
      searchBy,
      sortMode
    }]

    const mockUrl = `${API_URL}/movies?search=${encodeURIComponent(search.charAt(0).toUpperCase() + search.slice(1))}&searchBy=${searchBy.toLowerCase()}&sortBy=${sortMode.toLowerCase()}`
    fetchMock.getOnce(mockUrl, { body: { data: movies }, headers: { 'content-type': 'application/json' } })
    const store = mockStore({ results: [] })
    return store.dispatch(actions.searchMoviesFetch(search, searchBy)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('creates GET_MOVIE_SUCCESS when fetching movie has been done', () => {
    const movie = { id: 1, title: 'Kill bill' }

    const expectedActions = [{
      type: GET_MOVIE_SUCCESS,
      movie
    }]

    const mockUrl = `${API_URL}/movies/${encodeURIComponent(movie.id)}`
    fetchMock.getOnce(mockUrl, { body: {...movie }, headers: { 'content-type': 'application/json' } })
    const store = mockStore({ results: [] })
    return store.dispatch(actions.getMovieFetch(movie.id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
