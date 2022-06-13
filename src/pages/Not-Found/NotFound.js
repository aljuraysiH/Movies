import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
}

export default NotFound;
