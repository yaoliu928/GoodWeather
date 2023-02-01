import { useNavigate } from "react-router-dom";


const WeatherListItem = ({ id, temperature, name, condition }) => {

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/${id}`);
  }

  return (
    <li onClick={handleOnClick}>
      {`${name} Current Weather: ${temperature}°C -- ${condition}`}
    </li>
  )
}


export default WeatherListItem;