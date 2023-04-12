import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeWeather } from "../store/weatherSlice";

const WeatherListItem = ({ name, temp, condition, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeWeather(id));
  }
  return (
    <li>
      <p>City Name: {name}</p>
      <p>Temperature: {temp}°C</p>
      <p>Condition: {condition}</p>
      <button onClick={handleDelete}>X</button>
      <Link to={`/${id}`}>Forecast</Link>
    </li>
  );
}

export default WeatherListItem;