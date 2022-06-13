import styles from "./Navbar.module.scss";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <nav>
          <h3>
            <Link to="/">Movies Trailer</Link>
          </h3>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
