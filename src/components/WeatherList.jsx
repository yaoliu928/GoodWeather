import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from "../slices/weatherSlice";
const WeatherList = () => {
  const dispatch = useDispatch()
  const handleOnClick = useCallback(() => dispatch(getWeather('beijing')), [])
  return (<div onClick={handleOnClick}>WeatherList</div>);
}


export default WeatherList;