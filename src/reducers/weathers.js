const weathersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY':
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