import React from "react";
import s from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={s.closeButton} onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
