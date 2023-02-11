const weathersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default weathersReducer;