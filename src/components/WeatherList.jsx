import WeatherListItem from './WeatherListItem';

const WeatherList = ({ weathers }) => {

  return (
    <div>
      {weathers.map((weather) => (
        <WeatherListItem
          key={weather.id}
          {...weather}
        />))}
    </div>
  )
};

export default WeatherList;