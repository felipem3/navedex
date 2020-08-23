import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Input({
  name,
  type,
  label,
  placeholder,
  onChange,
  value,
  required,
  ...rest
}) {
  return (
    <div className="form-group" {...rest}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'date', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Input;
