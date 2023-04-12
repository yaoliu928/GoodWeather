import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { getForecasts } from "../store/thunkAction";
import { useEffect } from "react";
import ForecastsList from "../components/ForecastsList";

const DetailPage = () => {
  let isInitialMount = true;
  console.log('isInitialMount', isInitialMount);

  const { id } = useParams();
  const dispatch = useDispatch();
  const cityName = useSelector((state) => state.currentWeathers)
    .find((currentWeather) => (currentWeather.id === id)).name;
  console.log('cityname', cityName);
  useEffect(() => {
    if (!isInitialMount) {
      return;
    }
    dispatch(getForecasts(cityName));
    return () => {
      isInitialMount = false;
    }
  }, [cityName, dispatch]);

  return (
    <div>
      DetailPage
      <div>
        <Link to="/">Dashboard</Link>
      </div>
      <ForecastsList />
    </div>
  );
}

export default DetailPage;