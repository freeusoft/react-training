const result = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIE_SUCCESS':
      return {
        ...state,
        movie: action.movie
      }
    default:
      return state
  }
}

export default result
