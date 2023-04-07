import { useSelector } from 'react-redux';

import WeatherListItem from './WeatherListItem';
const WeatherList = () => {
  const currentWeathers = useSelector(state => state.currentWeathers);
  return (
    <div>
      <h2>Weather List</h2>
      <ul>
        {currentWeathers.map((currentWeather, index) => (
          <WeatherListItem
            key={index}
            {...currentWeather}
          />
        ))
        }
      </ul>
    </div>);
}

export default WeatherList;