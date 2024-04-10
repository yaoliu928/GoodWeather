import { useContext } from 'react';

import WeathersContext from '../context/weathersContext';

const WeatherListItem = ({ id, current, forecasts }) => {

  const { name, temp_c, text, icon } = current;
  const { dispatch } = useContext(WeathersContext);

  return (
    <div className="item" >
      <h2 data-testid="header-text">{name}</h2>
      <img src={icon} alt='weather icon' />
      <p>{`${temp_c}°C ${text}`}</p>
      <ul>{
        forecasts.map((forecast) => {
          const { minTemp, maxTemp, condition, date } = forecast;
          return (<li
            key={date}>
            {`${date} ${Math.floor(minTemp)}°C - ${Math.floor(maxTemp)}°C ${condition}`}</li>)
        })}
      </ul>
      <button className='delete-button' onClick={() => {
        dispatch({
          type: 'REMOVE_CITY', payload: id
        });
      }}>Remove</button>
    </div>
  )
}

export default WeatherListItem;