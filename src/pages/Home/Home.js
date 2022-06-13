import styles from "./Home.module.scss";
import Movies from "../../components/Movies/Movies";

function Home() {
  // const imgsSize = "http://image.tmdb.org/t/p/original";

  return (
    <div className={styles.container}>
      <Movies />
    </div>
  );
}

export default Home;
