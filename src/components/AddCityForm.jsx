import { useState } from "react";

const AddCityForm = ({ handleAddCity, isLoading }) => {

  const [city, setCity] = useState('');

  const handleOnChange = (event) => {
    setCity(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!city) {
      // todo : error handling
      return;
    }
    handleAddCity(city);
    setCity('');
  }

  return (
    <form onSubmit={(city) => handleOnSubmit(city)} >
      <input type='text'
        placeholder='Search a city'
        value={city}
        onChange={handleOnChange} />
      <button type="submit" disabled={isLoading} >Add a city</button>
    </form>
  )
};

export default AddCityForm;