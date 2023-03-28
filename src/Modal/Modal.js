import React, { useState } from 'react';
import './Modal.css';

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>{props.button_content}</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>{props.message}</p>
            <button
              data-id={props.id}
              onClick={(e) => {
                props.handleClick(e);
                toggleModal();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
