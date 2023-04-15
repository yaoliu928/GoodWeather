import { useEffect, useState, useContext, useRef } from "react";

import WeathersContext from '../context/weathersContext';
import checkDuplicate from '../utils/checkDuplicate';
import getWeatherData from '../utils/axios';
import formatWeatherData from '../utils/formatData';

const AddCityForm = ({ handleLoading }) => {
  const isInitialMount = useRef(true);
  const { weathers, dispatch } = useContext(WeathersContext);
  const [city, setCity] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOnChange = (event) => {
    setErrorMessage('');
    setCity(event.target.value);
  }

  const addCityWeather = async (city) => {
    try {
      checkDuplicate(weathers, city);
      handleLoading(true);
      const response = await getWeatherData(city);
      const weather = formatWeatherData(response);
      dispatch({
        type: 'ADD_CITY', payload: weather
      });
    }
    catch (error) {
      let errorMessage = error.message;
      if (error.response) {
        errorMessage = error.response.data.error.message;
      }
      setErrorMessage(errorMessage);
    }
    finally {
      setIsValidInput(false);
      handleLoading(false);
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addCityWeather(city);
    setCity('');
  }

  useEffect(() => {
    if (!isInitialMount.current) {
      return;
    }
    addCityWeather('brisbane');
    return () => {
      isInitialMount.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const debounce = setTimeout(() => {
      (city.length > 2)
        ? setIsValidInput(true)
        : setIsValidInput(false);
    }, 3000);
    return () => {
      clearTimeout(debounce);
    }
  }, [city]);

  return (
    <form onSubmit={(city) => handleOnSubmit(city)} >
      <input type='text'
        placeholder='Input a city name'
        value={city}
        onChange={handleOnChange}
        data-testid="add-a-city"
      />
      <button data-testid="click" type="submit" disabled={!isValidInput} >Add a city</button>
      {errorMessage && (<p data-testid="error-message">{errorMessage}</p>)}
    </form>
  )
};

export default AddCityForm;