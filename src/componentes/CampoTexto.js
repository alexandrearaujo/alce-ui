import React from "react";
import PropTypes from "prop-types";
import CustomInput from './template/CustomInput/CustomInput.jsx'; 
 

const CampoTexto = ({ label, id, value, onChange, maxlength, enabled, size, obrigatorio, mask, onBlur, touched, validacoes, error,showMask, ...input }) => (

<CustomInput labelText={label} value={value} onChange={onChange} maxlength={maxlength} obrigatorio={obrigatorio} enabled={enabled} onBlur={onBlur} mask={mask}  error={touched && error} helperText={error} id={id} formControlProps={{ fullWidth: true }} {...input} validacoes={validacoes} />
);
CampoTexto.propTypes = {
  label: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired, 
  enabled: PropTypes.bool,
  maxlength: PropTypes.number,
  onChange: PropTypes.func,
  tamanho: PropTypes.number
};
export default CampoTexto;