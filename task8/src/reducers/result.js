const result = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        movie: action.movie,
        error: null
      }
    case 'GET_MOVIE_ERROR':
      return {
        ...state,
        movie: action.movie,
        error: 'Movie not found because server error, try again some later...'
      }
    default:
      return state
  }
}

export default result
