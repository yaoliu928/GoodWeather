import React from 'react';

const ForecastItem = ({
  maxtemp_c,
  mintemp_c,
  condition,
  date,
  conditionIcon
}) => (
  <li className='item'>
    <h3 className='forecast-item'>{date}: {condition}</h3>
    <img src={`https:${conditionIcon}`} alt='weather icon' />
    <p>{Math.floor(mintemp_c)}°C ~ {Math.floor(maxtemp_c)}°C</p>
  </li>
);

export default ForecastItem;