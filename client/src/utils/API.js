import axios from 'axios';

const API = {

  getWeather: function (city) {
    // Request backend to fetch current weather in the provided city
    return axios.get("/weather/" + city);
  },
};

export default API;