import CircularProgress from '@mui/material/CircularProgress';
import WeatherListItem from './WeatherListItem';

const WeatherList = ({ weathers, isLoading }) => {

  return (
    <div>
      {isLoading
        ? (<CircularProgress />)
        : (<ul>{weathers.map((weather) => (
          <WeatherListItem
            key={weather.id}
            {...weather}
          />))}
        </ul>)}
    </div>
  )
};

export default WeatherList;