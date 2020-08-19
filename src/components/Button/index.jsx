import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Button({ type, outline, children, ...rest }) {
  return (
    //   <button className="outline" onClick={handleCancel}>
    //   Cancelar
    // </button>
    <button
      type={type}
      className={`button ${outline ? 'outline' : ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  outline: false,
};

Button.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;
