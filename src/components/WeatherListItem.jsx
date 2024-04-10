const WeatherListItem = ({ current, forecasts }) => {
  const { name, temp_c, text, icon } = current;

  return (
    <div className="item" >
      <h2>{name}</h2>
      <img src={icon} alt='weather icon' />
      <p>{`${temp_c}°C ${text}`}</p>
      <ul>{
        forecasts.map((forecast) => {
          const { minTemp, maxTemp, condition, date } = forecast;
          return (<li
            key={date}>
            {`${date} ${Math.floor(minTemp)}°C - ${Math.floor(maxTemp)}°C ${condition}`}</li>)
        })}
      </ul>
    </div>
  )
}

export default WeatherListItem;