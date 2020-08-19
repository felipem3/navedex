import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Modal({ visible, children, toggleVisible, size }) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  function handleClose() {
    toggleVisible();
  }
  return (
    visible && (
      <div className="modal">
        <div className={`modal-box ${size}`}>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    )
  );
}

Modal.defaultProps = {
  size: 'lg',
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleVisible: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
  children: PropTypes.element,
};
export default Modal;
