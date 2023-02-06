import { useState } from "react";

const AddCityForm = ({ handleAddCity }) => {

  const [city, setCity] = useState('');

  const handleOnChange = (event) => {
    setCity(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleAddCity(city);
  }

  return (
    <form onSubmit={(city) => handleOnSubmit(city)} >
      <input value={city} onChange={handleOnChange} />
      <button >Add a city</button>
    </form>
  )
};

export default AddCityForm;