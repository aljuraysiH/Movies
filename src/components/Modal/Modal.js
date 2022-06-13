import styles from "./Modal.module.scss";
import YouTube from "react-youtube";
function Modal({ showModal, setShowModal, keyId }) {
  return (
    <div className={`${styles.container} ${showModal ? styles.show : ""}`}>
      <div className={styles.bg}></div>
      <div className={styles.modal}>
        <span onClick={() => setShowModal(false)}>&#10006;</span>
        {showModal && (
          <YouTube
            videoId={keyId}
            className={styles.video}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: { autoplay: 1 },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
