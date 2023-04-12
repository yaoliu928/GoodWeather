import { createSlice } from '@reduxjs/toolkit';

import { getForecasts } from './thunkAction';

const initialState = [];
const forecastsSlice = createSlice({
  name: 'forecasts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      getForecasts.fulfilled,
      (state, action) => {
        console.log('payload', action.payload);
        const forecast = (num) => {
          const { maxtemp_c, mintemp_c, condition: { text: condition, icon: conditionIcon } } = action.payload.forecast.forecastday[num].day;
          const { date } = action.payload.forecast.forecastday[num];
          return { maxtemp_c, mintemp_c, condition, date, conditionIcon };
        };
        const dayOne = forecast(0);
        const dayTwo = forecast(1);
        const dayThree = forecast(2);
        return [dayOne, dayTwo, dayThree];
      })
  }
});

export default forecastsSlice.reducer;