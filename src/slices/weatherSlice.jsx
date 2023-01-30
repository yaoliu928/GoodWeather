import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeather = createAsyncThunk(
  'getWeather',
  async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=27e084209eca47d8ac565616232901&q=${city}&aqi=no`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      // Handle errors
    }
  }
);

const initialState = '';
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.fulfilled, (state, action) => {
        state = action.payload;
      })
  }
});

export default weatherSlice.reducer;