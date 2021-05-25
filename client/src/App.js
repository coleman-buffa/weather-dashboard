import './App.css';
import { Container, Grid} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            Hello World!
          </Grid>
          <Grid item xs={12} md={8}>
            Hello World!
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
