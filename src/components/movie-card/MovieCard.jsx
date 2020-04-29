import React from 'react';
import {
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useMovie } from '../../contexts/movie-context';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    backgroundPosition: 'top',
    paddingTop: '100%',
  },
  error: {
    paddingTop: 12,
  },
};

const MovieCard = (props) => {
  const { classes } = props;
  const { state } = useMovie();
  const { isLoading, movie } = state;

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && movie === null && (
        <div className={classes.error}>
          Aucun film{' '}
          <span role="img" aria-label="Triste">
            😞
          </span>
        </div>
      )}
      {!isLoading && movie && (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={state.movie.Poster} />
          <CardContent>
            <Typography
              data-testid="movie-title"
              className={classes.title}
              variant="h5"
              component="h2"
            >
              {movie.Title}
            </Typography>
            <Typography
              data-testid="movie-year"
              className={classes.pos}
              color="textSecondary"
            >
              {movie.Year}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default withStyles(styles)(MovieCard);
