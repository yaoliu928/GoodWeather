import { useState, useReducer } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import AddCityForm from "./components/AddCityForm";
import WeatherList from "./components/WeatherList";
import weathersReducer from './reducers/weathers';
import WeathersContext from './context/weathersContext';
import './styles/index.scss';

const App = () => {

  const [weathers, dispatch] = useReducer(weathersReducer, []);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='app'>
      <h1>Good Weather App</h1>
      <WeathersContext.Provider value={{ weathers, dispatch }}>
        <AddCityForm
          handleLoading={(isLoading) => { setIsLoading(isLoading) }} />
        {isLoading
          ? <CircularProgress />
          : <WeatherList />}
      </WeathersContext.Provider>
    </div>

  )
}

export default App;