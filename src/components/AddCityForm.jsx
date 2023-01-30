import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../slices/weatherSlice';
const AddCityForm = () => {
  const weather = useSelector((state) => state.weather)
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{weather}lll</h3>
      <input />
      <button
        onClick={() => dispatch(getWeather('beijing'))}
      >Add a city</button>
    </div>
  )
};

export default AddCityForm;