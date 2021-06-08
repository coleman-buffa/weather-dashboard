const router = require("express").Router();
const dotenv = require("dotenv");
const axios = require("axios");
const moment = require("moment");

dotenv.config();

//Get weather data from API. First fetch is to get coords of requested city then use those coords to get current and forecasted weather information. Also modifies the timestamp to human readable version and splices 
router.get("/weather/:city", (req, res) => {

  let city = req.params.city;
  let API_KEY = process.env.WEATHER_API_KEY;
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;
  axios({
    method: 'GET',
    url: URL
  })
    .then(response => {
      let lat = response.data.coord.lat;
      let lon = response.data.coord.lon;
      URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${API_KEY}`;
      axios({
        method: 'GET',
        url: URL
      })
        .then(response => {
          response.data.daily.map(item => {
            //Convert unix timestamp into human readable format
            let timeStamp = moment.unix(item.dt).format("MM/DD/YYYY");
            item.dt = timeStamp;

            //Add icon URL key to response object
            let iconURL = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
            item.weather[0].iconURL = iconURL;
          })
          res.json(response.data);
        })
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;