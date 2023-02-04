import axios from 'axios';

import URL from '../constants/constant';
import API_KEY from '../constants/key';

const getWeatherData = (city) => {
  return axios.get(
    `${URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
  );
}

export default getWeatherData;
