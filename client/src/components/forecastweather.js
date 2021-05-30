import React from 'react';
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

export default function ForecastWeather({ forecast }) {

  const classes = useStyles();

  return (
    <Paper className={classes.cardContainer}>
      {forecast.map((item) => (
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography>
              {item.dt}
            </Typography>
            <Typography>
              {item.temp.max}
            </Typography>
            <Typography>
              {item.temp.min}
          </Typography>
            <Typography>
              {item.weather[0].description}
          </Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>

  )
}