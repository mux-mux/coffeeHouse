import React, { useEffect } from 'react';

import Heading from '../Heading/Heading';
import './Modal.scss';

function Modal({ type = 'info', title, onClose, timeout = 10000, children }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => clearTimeout(timer);
  }, [onClose, timeout]);

  function handleOverlayClick(e) {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={`modal-content modal-${type}`}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <Heading as="h2" className="modal-title">
          {title}
        </Heading>
        <div className="modal-message">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
