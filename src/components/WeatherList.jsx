import WeatherListItem from './WeatherListItem';

const WeatherList = ({ weathers }) => {

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