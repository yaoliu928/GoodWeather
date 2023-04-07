const WeatherListItem = ({ name, temp, condition }) => (
  <li>
    <p>City Name: {name}</p>
    <p>Temperature: {temp}°C</p>
    <p>Condition: {condition}</p>
  </li>
);

export default WeatherListItem;