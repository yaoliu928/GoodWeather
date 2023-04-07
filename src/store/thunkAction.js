import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
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