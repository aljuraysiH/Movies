import styles from "./Movies.module.scss";
import { useEffect, useRef } from "react";
import { useMovie } from "../../hooks/useMovie";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "./MoviesVariants";
import Filter from "../Filter/Filter";
import Movie from "../Movie/Movie";

function Movies() {
  const {
    movies,
    setMovies,
    setSelectedMovieID,
    filteredMovies,
    setFilteredMovies,
    setType,
  } = useMovie();
  const ref = useRef(null);
  const url = "https://api.themoviedb.org/3";

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`${url}/search/movie`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: ref.current.value,
        },
      });
      setMovies(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.log(error.process);
    }
  };

  useEffect(() => {
    if (!movies) {
      const getTopRatedMovies = async () => {
        try {
          const { data } = await axios.get(`${url}/movie/popular`, {
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          });
          setMovies(data.results);
          setFilteredMovies(data.results);
          console.log("fetch");
        } catch (error) {
          console.log(error.process);
        }
      };
      getTopRatedMovies();
    }
  }, [setMovies, movies, setFilteredMovies, filteredMovies]);

  const onSubmit = (e) => {
    e.preventDefault();
    getMovies();
    setType(0);
    ref.current.value = "";
  };

  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className={styles.container}
    >
      <div className={styles.filter}>
        <form onSubmit={onSubmit}>
          <input ref={ref} type="text" placeholder="Movie Name" />
          <button type="submit">Search</button>
        </form>
        <Filter />
      </div>
      {(filteredMovies?.length > 0 && (
        <motion.div layout className={styles["movies-container"]}>
          <AnimatePresence>
            {filteredMovies?.map((movie) => {
              return (
                <Link
                  to={"/movie"}
                  key={movie.id}
                  onClick={() => setSelectedMovieID(movie.id)}
                >
                  <Movie movie={movie} />
                </Link>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )) || (
        <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
          No Movies Found
        </h1>
      )}
    </motion.div>
  );
}

export default Movies;
