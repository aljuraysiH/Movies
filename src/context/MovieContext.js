import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [type, setType] = useState(0);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        selectedMovieID,
        setSelectedMovieID,
        setFilteredMovies,
        filteredMovies,
        type,
        setType,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
