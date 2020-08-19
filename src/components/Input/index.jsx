import React from 'react';

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

export default Input;
