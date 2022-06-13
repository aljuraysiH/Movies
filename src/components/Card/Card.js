import styles from "./Card.module.scss";
import { motion } from "framer-motion";

function Card({ children }) {
  return (
    <motion.div layout className={styles.card}>
      {children}
    </motion.div>
  );
}

export default Card;
