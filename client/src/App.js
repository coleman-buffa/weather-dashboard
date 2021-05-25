import './App.css';
import TopBar from './components/topbar';
import SearchBar from './components/searchbar';
import CityList from './components/citylist';
import CurrentWeather from './components/currentweather';
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SearchBar />
            <CityList />
          </Grid>
          <Grid item xs={12} sm={8}>
            <CurrentWeather />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
