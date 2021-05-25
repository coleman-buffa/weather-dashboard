import React from 'react'
import { makeStyles} from "@material-ui/core/styles";
import {AppBar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#fff',
    fontSize: '2rem',    
  },
}));

export default function TopBar () {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Typography color="initial" align="center" varient="h1" className={classes.title}>
        Weather Dashboard
      </Typography>
    </AppBar>
  )
}