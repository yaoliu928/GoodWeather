import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import AddCityForm from "./components/AddCityForm";
import WeatherList from "./components/WeatherList";
import Header from './components/Header';
import './styles/index.scss';
import getWeatherData from './utils/axios';
import formatWeatherData from './utils/formatData';
import checkDuplicate from './utils/checkDuplicate';

const App = () => {

  const [weathers, setWeathers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmptyError = () => {
    setErrorMessage('');
  }

  const updateWeather = async (city) => {
    try {
      checkDuplicate(weathers, city);
      setIsLoading(true);
      const response = await getWeatherData(city);
      const weather = formatWeatherData(response);
      setWeathers([...weathers, weather]);
    }
    catch (error) {
      let errorMessage = error.message;
      if (error.response) {
        errorMessage = error.response.data.error.message;
      }
      setErrorMessage(errorMessage);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    updateWeather('brisbane');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <AddCityForm handleAddCity={updateWeather} emptyError={handleEmptyError} isLoading={isLoading} />
      {errorMessage && (<p>{errorMessage}</p>)}
      {isLoading
        ? <CircularProgress />
        : <WeatherList weathers={weathers} />}
    </div>
  )
}

export default App;