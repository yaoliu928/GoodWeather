import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { getWeather } from './thunkAction';

const initialState = [];
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    removeWeather: (state, action) => {
      return state.filter((currentWeather) => {
        return currentWeather.id !== action.payload
      }
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        };
        const name = action.payload.location.name;
        const temp = action.payload.current.temp_c;
        const condition = action.payload.current.condition.text;
        const id = uuid();
        state.push({ name, temp, condition, id });
      })
  }
});

export default weatherSlice.reducer;
export const { removeWeather } = weatherSlice.actions;