import { useContext } from 'react';

import WeathersContext from '../context/weathersContext';

const WeatherListItem = ({ id, current, forecasts }) => {

  const { name, temp_c, text, icon } = current;
  const { dispatch } = useContext(WeathersContext);

  return (
    <li >
      <h3>{name}</h3>
      <button onClick={() => {
        dispatch({
          type: 'REMOVE_CITY', payload: id
        });
      }}>Remove The City</button>
      <h4>Current Weather:</h4>
      <img src={icon} alt='weather icon' />
      <p>{`Temperature: ${temp_c}°C Condition: ${text}`}</p>
      <h4>Forecast (3-days):</h4>
      <ul>{
        forecasts.map((forecast) => {
          const { minTemp, maxTemp, condition, date } = forecast;
          return (<li
            key={date}>
            {`Date: ${date} Temperature: ${minTemp}°C - ${maxTemp}°C Condition: ${condition}`}</li>)
        })}
      </ul>
    </li>
  )
}

export default WeatherListItem;