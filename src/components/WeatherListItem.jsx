import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeWeather } from "../store/weatherSlice";

const WeatherListItem = ({ name, temp, condition, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeWeather(id));
  }
  return (
    <div className='item'>
      <h3>{name}</h3>
      <p>{temp}°C {condition}</p>
      <button className='delete-btn' onClick={handleDelete}>Remove</button>
      <Link className='forecast-btn' to={`/${id}`}>Forecast</Link>
    </div>
  );
}

export default WeatherListItem;