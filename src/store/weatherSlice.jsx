import { createSlice } from '@reduxjs/toolkit';

import { getWeather } from './thunkAction';

const initialState = [];
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        if (!action.payload) {
          return
        }
        const name = action.payload.location.name;
        const temp = action.payload.current.temp_c;
        const condition = action.payload.current.condition.text;
        state.push({ name, temp, condition });
      })
  }
});

export default weatherSlice.reducer;