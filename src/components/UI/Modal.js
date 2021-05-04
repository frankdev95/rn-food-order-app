import React, { useContext } from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";
import ModalContext from "../../store/cart-context";

const Mask = (props) => {
  const ctx = useContext(ModalContext);
  return <div className={styles.mask} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Mask onClick={props.onMaskClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
