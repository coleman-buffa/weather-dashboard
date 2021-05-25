import './App.css';
import TopBar from './components/topbar/topbar';
import SearchBar from './components/searchbar/searchbar';
import CityList from './components/citylist/citylist';
import { Container, Grid, Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SearchBar/>
            <CityList />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper>Hello World</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
