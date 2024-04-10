import { useSelector } from 'react-redux';

import WeatherListItem from './WeatherListItem';
const WeatherList = () => {
  const currentWeathers = useSelector(state => state.currentWeathers);
  return (
    <div>
      <h2>Weather List</h2>
      <div>
        {currentWeathers.map((currentWeather) => (
          <WeatherListItem
            key={currentWeather.id}
            {...currentWeather}
          />
        ))
        }
      </div>
    </div>);
}

export default WeatherList;