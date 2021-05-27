import React, { useEffect } from 'react';
import API from '../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    '& > *': {
      margin: theme.spacing(1),
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
}));

export default function ForecastWeather(props) {

  const classes = useStyles();
  useEffect(() => {
    loadForecast(props.city);
  }, [props.city]);

  const loadForecast = city => {
    console.log(API.getForecastWeather(city));
  }

  return (
    <Paper className={classes.cardContainer}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography>
            DATE
          </Typography>
          <Typography>
            THING
          </Typography>
          <Typography>
            WEATHER
          </Typography>
          <Typography>
            WOW
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography>
            DATE
          </Typography>
          <Typography>
            THING
          </Typography>
          <Typography>
            WEATHER
          </Typography>
          <Typography>
            WOW
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography>
            DATE
          </Typography>
          <Typography>
            THING
          </Typography>
          <Typography>
            WEATHER
          </Typography>
          <Typography>
            WOW
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography>
            DATE
          </Typography>
          <Typography>
            THING
          </Typography>
          <Typography>
            WEATHER
          </Typography>
          <Typography>
            WOW
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Typography>
            DATE
          </Typography>
          <Typography>
            THING
          </Typography>
          <Typography>
            WEATHER
          </Typography>
          <Typography>
            WOW
          </Typography>
        </CardContent>
      </Card>

    </Paper>

  )
}