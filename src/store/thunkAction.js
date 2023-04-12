import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeather = createAsyncThunk(
  'currentWeathers/getWeather',
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

export const getForecasts = createAsyncThunk(
  'forecasts/getForecasts',
  async (city) => {
    const url =
      `http://api.weatherapi.com/v1/forecast.json?key=27e084209eca47d8ac565616232901&q=${city}&days=3&aqi=no&alerts=no`;
    try {
      const response = await axios.get(url);
      console.log('forecast thunk', response);
      return response.data;
    } catch (error) {
      // Handle errors
    }
  }

)