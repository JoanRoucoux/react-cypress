import React from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useMovie } from '../../contexts/movie-context';

const styles = {
  input: {
    marginLeft: 8,
    flex: 1,
  },
};

const SearchInput = (props) => {
  const { classes } = props;
  const { state, dispatch } = useMovie();

  const handleOnChange = (e) =>
    dispatch({ type: 'setSearch', payload: e.currentTarget.value });

  const handleOnClick = async () => {
    dispatch({
      type: 'setLoading',
    });

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=4d7c0bd5&s=${state.search}`
    ).then((response) => response.json());

    dispatch({
      type: 'setMovie',
      payload: response.Search ? response.Search[0] : null,
    });
  };

  return (
    <Paper elevation={1}>
      <InputBase
        value={state.search}
        onChange={handleOnChange}
        onKeyPress={(event) => event.key === 'Enter' && handleOnClick()}
        className={classes.input}
        placeholder="Search Movies 🍿"
      />
      <IconButton onClick={handleOnClick} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default withStyles(styles)(SearchInput);
