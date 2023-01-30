const axios = require('axios');
axios.get('http://api.weatherapi.com/v1/current.json?key=27e084209eca47d8ac565616232901&q=beijing&aqi=no')
  .then(function (response) {
    // handle success
    console.log(response.data.current.condition);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });