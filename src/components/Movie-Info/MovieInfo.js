import styles from "./MovisInfo.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovie } from "../../hooks/useMovie";
import axios from "axios";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";
import { variants } from "../Movies/MoviesVariants";

function MovieInfo() {
  const imgUrl = "http://image.tmdb.org/t/p/w1280";
  const [movie, setMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { selectedMovieID } = useMovie();
  const navigate = useNavigate();
  const url = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await axios.get(`${url}/movie/${selectedMovieID}`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            append_to_response: "videos",
          },
        });
        setMovie(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchMovie();
  }, [selectedMovieID]);

  const findKey = (movie) => {
    const key = movie?.videos?.results?.find(
      (mv) => mv.name === "Official Trailer"
    );
    return key ? key.key : null;
  };

  if (!selectedMovieID) {
    return (
      <div className={styles.containerError}>
        <h2>You have to choose a movie!</h2>
        <Link to={"/"}>Home Page</Link>
      </div>
    );
  }
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      {/* <button onClick={() => navigate(-1)}>Back</button> */}
      <div className={styles.movie}>
        <img src={`${imgUrl}${movie?.backdrop_path}`} alt="" />
        <h2>{movie?.title}</h2>
        <p>{movie?.overview}</p>
        {(movie?.videos?.results?.find(
          (el) => el.name === "Official Trailer"
        ) && (
          <button onClick={() => setShowModal(!showModal)}>Play Trailer</button>
        )) || (
          <button disabled className={styles.noTrailer}>
            Sorry No trailer :(
          </button>
        )}
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        keyId={findKey(movie)}
      />
    </motion.div>
  );
}

export default MovieInfo;
