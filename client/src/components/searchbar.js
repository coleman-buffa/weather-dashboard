import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchBar(props) {

  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={props.handleInputChange}>
      <TextField
        id="standard-search"
        label="City Search"
        varient="filled"
        type="search"
        inputRef={props.inputRef}
      />
    </form>
  )
}