import React from 'react';

const ForecastItem = ({
  maxtemp_c,
  mintemp_c,
  condition,
  date,
  conditionIcon
}) => (
  <li>
    <h3>{date}:{condition}</h3>
    <img src={`https:${conditionIcon}`} alt='weather icon' />
    <p>{mintemp_c}°C ~ {maxtemp_c}°C</p>
  </li>
);

export default ForecastItem;