import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import AddCityForm from "./components/AddCityForm";
import WeatherList from "./components/WeatherList";
import Footer from './components/Footer';
import './styles/index.scss';

const App = () => {

  const [weathers, setWeathers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCity = async (city) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=27e084209eca47d8ac565616232901&q=${city}&days=3&aqi=no&alerts=no`
      );
      // Question: how to manage so many undefine
      if (!(response
        && response.data
        && response.data.current
        && response.data.location
        && response.data.forecast
        && response.data.location.name
        && response.data.current.temp_c
        && response.data.current.condition
        && response.data.current.condition.text
        && response.data.forecast.forecastday)
      ) {
        throw new Error('Sorry, there is no data. Please contact us.');
      }
      const { current, location, forecast } = response.data;
      // current
      const { name } = location;
      const { temp_c, condition: { text, icon } } = current;
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
        current: { name, temp_c, text, icon },
        forecasts: [dayForecast(0), dayForecast(1), dayForecast(2)]
      }
      setWeathers([...weathers, weather]);
      setErrorMessage('');
      setIsLoading(false);
    }
    catch (error) {
      let errorMessage = error;
      if (error.response) {
        errorMessage = error.response.data.error.message;
      }
      setErrorMessage(errorMessage);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleAddCity('brisbane');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AddCityForm handleAddCity={handleAddCity} />
      {errorMessage && (<p>{errorMessage}</p>)}
      <WeatherList isLoading={isLoading} weathers={weathers} />
      <Footer />
    </div>
  )
}

export default App;