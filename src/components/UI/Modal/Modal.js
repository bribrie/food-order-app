import Portal from "./Portal";
import styles from "./Modal.module.scss";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Overlay = ({ children }) => {
  return (
    <div className={styles.overlay}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      <Portal>
        <Backdrop />
        <Overlay>{children}</Overlay>
      </Portal>
    </>
  );
};

export default Modal;
