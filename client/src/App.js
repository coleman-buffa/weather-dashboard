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
  const [cityList, setCityList] = useState([]);
  const inputRef = useRef("");

  useEffect(() => {
    console.log(city);
}, [city]);

  const handleInputChange = event => {
    event.preventDefault();
    setCity(inputRef.current.value);
  }

  return (
    <div className="App">
      <TopBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SearchBar 
              handleInputChange={handleInputChange}
              inputRef={inputRef}
            />
            <CityList />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CurrentWeather />
            <ForecastWeather />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
