import React from "react";
import PropTypes from "prop-types";
import InputMask from 'react-input-mask';

const Input = ({ label, text, type, id, value, handleChange, mask }) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
    <inputMask
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      mask={mask}
      required
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;