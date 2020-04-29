import React, { useReducer, useContext, useMemo } from 'react';

const MovieContext = React.createContext();
const INITIAL_STATE = { movie: undefined, search: '', isLoading: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'setMovie':
      return { ...state, movie: action.payload, isLoading: false };
    case 'setSearch':
      return { ...state, search: action.payload };
    case 'setLoading':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = useMemo(() => {
    return { dispatch, state };
  }, [state]);

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

const useMovie = () => useContext(MovieContext);

export { MovieProvider, useMovie };
