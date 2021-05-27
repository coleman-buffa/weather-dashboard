import React, { useEffect, useState, useRef } from 'react';
import {useLocalStorage} from './hooks/useLocalStorage';
import './App.css';
import TopBar from './components/topbar';
import SearchBar from './components/searchbar';
import CityList from './components/citylist';
import CurrentWeather from './components/currentweather';
import ForecastWeather from './components/forecastweather';
import { Container, Grid } from "@material-ui/core";

function App() {

  const [city, setCity] = useState("");
  const [cityList, setCityList] = useLocalStorage('cityList', []);
  const inputRef = useRef("");

  useEffect(() => {
    console.log(city);
}, [city]);

useEffect(() => {
  console.log(`${cityList} is type ${typeof(cityList)}`);
}, [cityList]);

  const handleSubmit = event => {
    event.preventDefault();
    let searchTerm = inputRef.current.value;
    setCity(searchTerm);
    console.log(`${searchTerm} is type ${typeof(searchTerm)}`);
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
