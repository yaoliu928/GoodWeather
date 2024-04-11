import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from "react";

import { getForecasts } from "../store/thunkAction";
import ForecastsList from "../components/ForecastsList";

const DetailPage = () => {
  const isInitialMount = useRef(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cityName = useSelector((state) => state.currentWeathers)
    .find((currentWeather) => (currentWeather.id === id)).name;

  useEffect(() => {
    if (!isInitialMount.current) {
      return;
    }
    dispatch(getForecasts(cityName));
    return () => {
      isInitialMount.current = false;
    }
  }, [cityName, dispatch]);

  return (
    <div className='dashboard'>
      <h1>Forecasts</h1>
      <div>
        <Link className='dashboard-link' to="/">Dashboard</Link>
      </div>
      <ForecastsList />
    </div>
  );
}

export default DetailPage;