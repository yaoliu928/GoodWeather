import React from 'react';
import { useSelector } from 'react-redux';

import ForecastItem from './ForecastItem';

const ForecastsList = () => {
  const forecasts = useSelector((state) => state.forecasts);

  return (
    <div>ForecastsList:
      <ul>{forecasts.map((forecast) =>
        <ForecastItem {...forecast} key={forecast.date} />)
      }
      </ul>
    </div>
  )
}

export default ForecastsList