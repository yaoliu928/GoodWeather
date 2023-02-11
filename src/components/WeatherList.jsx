import { useContext } from 'react';

import WeathersContext from '../context/weathersContext';
import WeatherListItem from './WeatherListItem';

const WeatherList = () => {
  const { weathers } = useContext(WeathersContext);

  return (
    <div>
      <ul>{weathers.map((weather) => (
        <WeatherListItem
          key={weather.id}
          {...weather}
        />))}
      </ul>
    </div>
  )
};

export default WeatherList;