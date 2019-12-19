import React from "react";
import PropTypes from "prop-types";

const CampoTextArea = ({ label, id, value, onChange, maxlength, enabled, size, obrigatorio, linhas, colunas }) => (

  <div className={`coluna c_${size} ${ ( enabled!==undefined && !enabled) ?'desabilitado':''}`}>
      <label  htmlFor={id} className={(typeof obrigatorio === 'undefined' || obrigatorio===null || !obrigatorio)?'':'obrigatorio'}>{label}</label>
      <div className="coluna">
          <textarea className="maiuscula" type="text" maxLength={maxlength} value={(value===null)?'':value} id={id} name={id} 
                     onChange={onChange} disabled={ enabled!==undefined && !enabled ?'disabled':''} rows={linhas} cols={colunas} />
      </div>
  </div>
);
CampoTextArea.propTypes = {
  label: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  maxlength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  tamanho: PropTypes.number.isRequired
};
export default CampoTextArea;