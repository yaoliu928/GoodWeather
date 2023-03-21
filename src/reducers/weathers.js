const weathersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      if (state[0] && state[0].current.name === action.payload.current.name) {
        return [...state];
      }
      return [...state, action.payload];
    case 'REMOVE_CITY':
      return state.filter((weather) =>
        weather.id !== action.payload
      )
    default:
      return state;
  }
}

export default weathersReducer;