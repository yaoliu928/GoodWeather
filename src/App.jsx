import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import AddCityForm from "./components/AddCityForm";
import WeatherList from "./components/WeatherList";

const App = () => {

  const [weathers, setWeathers] = useState([]);

  const handleWeatherList = async (city) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=27e084209eca47d8ac565616232901&q=${city}&days=3&aqi=no&alerts=no`
    );
    const { current, location, forecast } = response.data;
    // current
    const { name } = location;
    const { temp_c, condition: { text } } = current;
    // forecasts
    const { forecastday } = forecast;
    const dayForecast = (num) => ({
      date: forecastday[num].date,
      maxTemp: forecastday[num].day.maxtemp_c,
      minTemp: forecastday[num].day.mintemp_c,
      condition: forecastday[num].day.condition.text
    });

    // state
    const weather = {
      id: uuidv4(),
      current: { name, temp_c, text },
      forecasts: [dayForecast(0), dayForecast(1), dayForecast(2)]
    }
    setWeathers([...weathers, weather]);
  };

  const handleAddCity = (city) => {
    handleWeatherList(city);
  }

  return (
    <div>
      Dashboard
      <AddCityForm handleAddCity={handleAddCity} />
      <WeatherList weathers={weathers} />
    </div>
  )
}

export default App;