const router = require("express").Router();
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

//TODO setup routes to receive request from front end which triggers a fetch to open weather API to get the searched weather
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
          res.json(response.data);
        })
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;