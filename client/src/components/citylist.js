import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function CityList() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation='vertical'
        color='primary'
        aria-label='vertical outlined primary button group'
      >
        <Button variant="contained">London</Button>
        <Button>Berlin</Button>
        <Button>San Francisco</Button>
        <Button>New York</Button>
      </ButtonGroup>

    </div>
  )
}