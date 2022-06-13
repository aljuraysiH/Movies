import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export const useMovie = () => {
  const context = useContext(MovieContext);

  return context;
};
