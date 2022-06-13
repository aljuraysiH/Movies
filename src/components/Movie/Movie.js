import styles from "./Movie.module.scss";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { layoutVariants } from "../Movies/MoviesVariants";
function Movie({ movie }) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <motion.div
      layout
      variants={layoutVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className={styles["movie-container"]}
    >
      <Card>
        {(movie?.poster_path && (
          <img src={`${imgUrl}${movie?.poster_path}`} alt="" />
        )) || <h2 className={styles.noImage}>No Image</h2>}
        <div className={styles["movie-title"]}>
          <h3>{movie.title}</h3>
        </div>
      </Card>
    </motion.div>
  );
}

export default Movie;
