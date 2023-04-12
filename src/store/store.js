import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import forecastsReducer from './forecastsSlice';

export const store = configureStore({
  reducer: {
    currentWeathers: weatherReducer,
    forecasts: forecastsReducer
  }
})