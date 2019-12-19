import React from "react";
import PropTypes from "prop-types";
import Select, {ChoiceRenderer} from './Select';

const CampoComboBox = ({ label, id, value, onChange, enabled, options, obrigatorio }) => (
    <Select options={options} label ={label} onChange={onChange} enabled={enabled} value={value} id={id} /> 
);



export {
  ChoiceRenderer
}

CampoComboBox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
};
export default CampoComboBox;