import React, { useState } from 'react';

/* 
    Pass it as a child component to both Home and 
    Favorites components. Pass the message and Function
    as Props
*/

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
