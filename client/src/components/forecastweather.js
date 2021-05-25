import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Card, CardContent, Typography } from '@material-ui/core';

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

export default function ForecastWeather() {
  const classes = useStyles();

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