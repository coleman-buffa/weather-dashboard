import React, {useEffect} from 'react';
import API from '../utils/API';
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
  useEffect(() => {
    loadCurrent(props.city);
  }, [props.city]);

  const loadCurrent = city => {
    console.log(API.getCurrentWeather(city));
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Typography>Current Weather in {props.city}:</Typography>
        <Typography variant="caption">Temperature:</Typography>
        <Typography variant="caption">Humidity:</Typography>
        <Typography variant="caption">Wind Speed:</Typography>
        <Typography variant="caption">UV Index:</Typography>
      </Paper>

    </div>
  )
}
