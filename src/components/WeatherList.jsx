import WeatherListItem from './WeatherListItem';

const WeatherList = ({ weathers }) => (
  <ul>
    {
      weathers.map((weather) => (
        <WeatherListItem
          key={weather.id}
          {...weather}
        />))
    }
  </ul>
);

export default WeatherList;