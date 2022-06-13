import styles from "./Filter.module.scss";
import { useMovie } from "../../hooks/useMovie";

function Filter() {
  const { type, setType, setFilteredMovies, filteredMovies, movies } =
    useMovie();

  const handleClick = (type) => {
    if (type === 0) {
      setFilteredMovies(movies);
      setType(type);
      return;
    } else {
      const newMovies = movies.filter((movie) =>
        movie.genre_ids.includes(type)
      );
      setFilteredMovies(newMovies);
      setType(type);
      return;
    }
  };
  return (
    <div className={styles["filter-buttons"]}>
      <button
        className={`${type === 0 ? styles.active : ""}`}
        onClick={() => handleClick(0)}
      >
        All
      </button>
      <button
        className={`${type === 35 ? styles.active : ""}`}
        onClick={() => handleClick(35)}
      >
        Comedy
      </button>
      <button
        className={`${type === 28 ? styles.active : ""}`}
        onClick={() => handleClick(28)}
      >
        Action
      </button>
    </div>
  );
}

export default Filter;
