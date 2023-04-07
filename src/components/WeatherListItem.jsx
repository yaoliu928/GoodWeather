import { useDispatch } from 'react-redux';
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
    </li>
  );
}

export default WeatherListItem;