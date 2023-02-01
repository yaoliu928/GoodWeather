import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import AddCityForm from "../components/AddCityForm";
import WeatherList from "../components/WeatherList";

const Dashboard = () => {

  const [weathers, setWeathers] = useState([]);

  const handleWeatherList = async (city) => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=27e084209eca47d8ac565616232901&q=${city}&aqi=no`);
    console.log(response);
    const { current, location } = response.data;
    const temperature = current.temp_f;
    const condition = current.condition.text;
    const { name } = location;
    const weather = {
      id: uuidv4(),
      name, temperature, condition
    }
    setWeathers([...weathers, weather]);
    localStorage.setItem("weathers", ' weather');
  };

  const handleAddCity = (city) => {
    handleWeatherList(city);
  }

  return (
    <div>
      Dashboard
      <AddCityForm handleAddCity={handleAddCity} />
      <WeatherList weathers={weathers} />
    </div>
  )
}

export default Dashboard;