import { v4 as uuidv4 } from 'uuid';

const formatForecastsData = (forecastDay) => {

  if (!(forecastDay[0]
    && forecastDay[1]
    && forecastDay[2]
    && forecastDay[0].day
    && forecastDay[1].day
    && forecastDay[2].day
    && forecastDay[0].day.condition
    && forecastDay[1].day.condition
    && forecastDay[2].day.condition
  )) {
    throw new Error('Sorry, there is no data. Please contact us.');
  };

  const dayForecast = (forecastDay, num) => ({
    date: forecastDay[num].date,
    maxTemp: forecastDay[num].day.maxtemp_c,
    minTemp: forecastDay[num].day.mintemp_c,
    condition: forecastDay[num].day.condition.text
  });

  return [
    dayForecast(forecastDay, 0),
    dayForecast(forecastDay, 1),
    dayForecast(forecastDay, 2)];
};

const formatWeatherData = (response) => {

  // 🐨🐨🐨 Question: how to manage so many undefine ;
  if (!(response
    && response.data
    && response.data.current
    && response.data.location
    && response.data.forecast
    && response.data.current.condition
    && response.data.forecast.forecastday
  )) {
    throw new Error('Sorry, there is no data. Please contact us.');
  }

  const {
    current:
    { temp_c,
      condition: { text, icon } },
    location: { name },
    forecast: { forecastday } }
    = response.data;

  const forecasts = formatForecastsData(forecastday);

  const weather = {
    id: uuidv4(),
    current: { name, temp_c, text, icon },
    forecasts
  }
  return weather;
}

export default formatWeatherData;