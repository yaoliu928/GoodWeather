import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getWeather } from '../store/thunkAction';
const AddCityForm = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(city));
  }

  return (
    <form className='add-form' onSubmit={handleOnSubmit}>
      <h2>Add City Form</h2>
      <label htmlFor='city'>City Name</label>
      <input
        type='text'
        id='city'
        value={city}
        onChange={(e) => setCity(e.target.value)} />
      <button type='submit'
      >Add a city
      </button>
    </form>

  )
};

export default AddCityForm;