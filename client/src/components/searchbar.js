import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { IconButton, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={props.handleInputChange}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}