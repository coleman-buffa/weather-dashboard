import React, { useState, useEffect, useRef } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import API from './utils/API';
import './App.css';
import TopBar from './components/topbar';
import SearchBar from './components/searchbar';
import CityList from './components/citylist';
import CurrentWeather from './components/currentweather';
import ForecastWeather from './components/forecastweather';
import { Container, Grid } from "@material-ui/core";

function App() {

  const [cityList, setCityList] = useLocalStorage('cityList', []);
  const [city, setCity] = useState(cityList[0] ? cityList[0] : "");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const inputRef = useRef("");

  useEffect(() => {
    loadWeather(city);
  }, [city]);

  const loadWeather = async city => {
    let data = await API.getWeather(city);
    console.log(data);
    setWeather(data.data.current);
    let forecast = [];
    for (let i = 1; i < 6; i++){
      forecast.push(data.data.daily[i]);
    }
    setForecast(forecast);    
  }

  const handleSubmit = event => {
    event.preventDefault();
    let searchTerm = inputRef.current.value;
    setCity(searchTerm);
    if (cityList.indexOf(searchTerm) < 0) {
      setCityList([searchTerm, ...cityList]);
    }
    inputRef.current.value = "";
  }

  const handleClick = event => {
    event.preventDefault();
    setCity(event.target.firstChild.textContent);
  }

  return (
    <div className="App">
      <TopBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SearchBar
              handleSubmit={handleSubmit}
              inputRef={inputRef}
            />
            <CityList
              handleClick={handleClick}
              cityList={cityList}
              city={city}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CurrentWeather
              weather={weather}
            />
            <ForecastWeather
              forecast={forecast}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
