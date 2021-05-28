import React, { useState, useEffect } from 'react';
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

  const [weather, setWeather] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    loadCurrent(props.city);
  }, [props.city]);

  const loadCurrent = async city => {
    let data = await API.getCurrentWeather(city);
    console.log(data);     
    
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
