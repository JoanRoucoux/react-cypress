import React from 'react';
import { Grid } from '@material-ui/core';
import { MovieProvider } from './contexts/movie-context';
import { MovieCard, SearchInput } from './components';

const App = () => {
  return (
    <MovieProvider>
      <Grid container spacing={16}>
        <Grid item>
          <SearchInput />
        </Grid>
        <Grid item>
          <MovieCard />
        </Grid>
      </Grid>
    </MovieProvider>
  );
};

export default App;
