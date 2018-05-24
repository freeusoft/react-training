import resultReducer from '../reducers/result'
import resultsReducer from '../reducers/results'
import { GET_MOVIE_SUCCESS, SEARCH_MOVIES_SUCCESS, SET_RESULTS_SORT_MODE, SortMode, SearchMode } from '../actions'

describe('result reducer', () => {
  test('should handle GET_MOVIE_SUCCESS', () => {
    expect(
      resultReducer([], {
        type: GET_MOVIE_SUCCESS,
        movie: { id: 1 }
      })
    ).toEqual({ "error": null, "movie": { "id": 1 } })

    expect(
      resultReducer(undefined, {
        type: 'DEFAULT'
      })
    ).toEqual([])

  })
})

describe('results reducer', () => {
  test('should handle SEARCH_MOVIES_SUCCESS', () => {
    expect(
      resultsReducer([], {
        type: SEARCH_MOVIES_SUCCESS,
        movies: [{ id: 1, release_date: 100, vote_average: 10 }, { id: 2, release_date: 90, vote_average: 7 }],
        search: 'Kill bill',
        searchBy: SearchMode.TITLE,
        sortMode: SortMode.RELEASE_DATE
      })
    ).toEqual({
      error: null,
      movies: [{ id: 1, release_date: 100, vote_average: 10 }, { id: 2, release_date: 90, vote_average: 7 }],
      search: 'Kill bill',
      searchBy: SearchMode.TITLE,
      sortMode: SortMode.RELEASE_DATE
    })

    expect(
      resultsReducer(undefined, {
        type: 'DEFAULT'
      })
    ).toEqual([])

  })

  test('should handle SET_RESULTS_SORT_MODE', () => {
    const movies = [{ id: 1, release_date: 100, vote_average: 7 }, { id: 2, release_date: 90, vote_average: 10 }]
    expect(
      resultsReducer({ movies }, {
        type: SET_RESULTS_SORT_MODE,
        sortMode: SortMode.RELEASE_DATE
      })
    ).toEqual({
      movies: [{ id: 1, release_date: 100, vote_average: 7 }, { id: 2, release_date: 90, vote_average: 10 }],
      sortMode: SortMode.RELEASE_DATE
    })

    expect(
      resultsReducer({ movies }, {
        type: SET_RESULTS_SORT_MODE,
        sortMode: SortMode.VOTE_AVERAGE
      })
    ).toEqual({
      movies: [{ id: 2, release_date: 90, vote_average: 10 }, { id: 1, release_date: 100, vote_average: 7 }],
      sortMode: SortMode.VOTE_AVERAGE
    })


  })
})
