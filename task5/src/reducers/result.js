const result = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIE':
      return {
        ...state,
        movie: action.movie
      }
    default:
      return state
  }
}

export default result
