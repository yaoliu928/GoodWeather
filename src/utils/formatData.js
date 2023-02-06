import { v4 as uuidv4 } from 'uuid';

const formatForecastsData = (forecastDay) => {

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