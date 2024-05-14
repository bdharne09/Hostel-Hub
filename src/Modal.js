import React from "react";
import "./Modal.css";

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
