const checkDuplicate = (weathers, city) => {
  const existedCity = weathers.find((weather) =>
    weather.current.name.toLowerCase() === city.toLowerCase());
  if (existedCity) {
    throw new Error('Sorry, this city has already existed.');
  }
}

export default checkDuplicate;