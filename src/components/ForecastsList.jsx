import React from 'react';
import { useSelector } from 'react-redux';

import ForecastItem from './ForecastItem';

const ForecastsList = () => {
  const forecasts = useSelector((state) => state.forecasts);

  return (
    <ul className='forecasts'>{forecasts.map((forecast) =>
      <ForecastItem {...forecast} key={forecast.date} />)
    }
    </ul>
  )
}

export default ForecastsList