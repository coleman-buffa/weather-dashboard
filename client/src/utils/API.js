import axios from 'axios';

const API = {

  getCurrentWeather: function (city) {
    // Request backend to fetch current weather in the provided city
    return axios.get("/weather/current/" + city);
  },

  getForecastWeather: function (city) {
    // Request backend to fetch forecasted weahter in in the provided city
    return axios.get("/weather/forecast" + city);
  },
};

export default API;