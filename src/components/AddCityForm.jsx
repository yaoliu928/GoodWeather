import { useEffect, useState } from "react";

const AddCityForm = ({ handleAddCity, isLoading, emptyError }) => {

  const [city, setCity] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);

  const handleOnChange = (event) => {
    emptyError();
    setCity(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleAddCity(city);
    setCity('');
  }

  useEffect(() => {
    (city.length > 2)
      ? setIsValidInput(true)
      : setIsValidInput(false)
  }, [city]);

  return (
    <form onSubmit={(city) => handleOnSubmit(city)} >
      <input type='text'
        placeholder='Input a city name'
        value={city}
        onChange={handleOnChange} />
      <button type="submit" disabled={(!isValidInput) || isLoading} >Add a city</button>
    </form>
  )
};

export default AddCityForm;