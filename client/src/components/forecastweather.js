import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardContent, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column;',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'space-between',
    alignContent: 'center',
  }
}));

export default function ForecastWeather({ forecast }) {

  const classes = useStyles();

  return (
    <Paper>
      <Grid container className={classes.cardContainer}>
        {forecast.map((item) => (
          <Card variant="outlined" className={classes.card} key={item.dt}>
            <CardContent>
              <Typography align="center">
                {item.dt} 
              </Typography>
              <img src={item.weather[0].iconURL}/>               
              <Typography variant="caption">
                Low: {item.temp.min}
              </Typography>
              <Typography variant="caption">
                Max: {item.temp.max}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Paper>
  )
}