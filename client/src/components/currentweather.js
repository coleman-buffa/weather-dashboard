import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
}));

export default function CurrentWeather(props) {

  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography>Current Weather in {props.city}:</Typography>
        <Typography variant="caption">Temperature: {props.weather.feels_like}</Typography>
        <Typography variant="caption">Humidity: {props.weather.humidity}</Typography>
        <Typography variant="caption">Wind Speed: {props.weather.wind_speed}</Typography>
        <Typography variant="caption">UV Index: {props.weather.uvi}</Typography>
      </Paper>

    </div>
  )
}
