import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import TopBar from './components/topbar';
import SearchBar from './components/searchbar';
import CityList from './components/citylist';
import CurrentWeather from './components/currentweather';
import ForecastWeather from './components/forecastweather';
import { Container, Grid } from "@material-ui/core";

function App() {

  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState(["London", "Berlin", "San Francisco", "New York"]);
  const inputRef = useRef("");

  useEffect(() => {
    console.log(city);
}, [city]);

  const handleSubmit = event => {
    event.preventDefault();
    setCity(inputRef.current.value);
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
              city={city}
            />
            <ForecastWeather />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
