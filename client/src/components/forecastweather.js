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
  cardContent: {
    display: 'flex',
    flexDirection: 'column;',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'space-between',
    alignContent: 'center',
  },
  img: {
    height: '50%',
    width: '50%',
  },
}));

export default function ForecastWeather({ forecast }) {

  const classes = useStyles();

  return (
    <Paper>
      <Grid container className={classes.cardContainer}>
        {forecast.map((item) => (
          <Card variant="outlined" key={item.dt}>
            <CardContent className={classes.cardContent}>
              <Typography align="center">
                {item.dt}
              </Typography>
              <img className={classes.img} src={item.weather[0].iconURL} alt={item.weather[0].main} />
              <Typography variant="caption">
                Low: {item.temp.min}&deg;F
              </Typography>
              <Typography variant="caption">
                Max: {item.temp.max}&deg;F
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Paper>
  )
}