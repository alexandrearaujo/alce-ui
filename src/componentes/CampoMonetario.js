import React from "react";
import CampoTexto from "./CampoTexto";
import PropTypes from "prop-types";  

const monetario = "R$ ";

const pad_with_zeroes = (number, length) => {

  let my_string = '' + number;
  while (my_string.length < length) {
      my_string = '0' + my_string;
  }

  return my_string;

}

const formatarMonetario = (valor) => {
  let retorno = "0,00";
  if(valor!==null){  
    valor = parseFloat(Math.round(valor * 100) / 100).toFixed(2);  
    valor = pad_with_zeroes(valor + '',3);
    valor = parseInt(valor.replace(/[\D]+/g,''));
    valor = pad_with_zeroes(valor + '',3);
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    } 
    retorno =  monetario + valor;
  }
  return retorno;
} 


const limparFormatacao = (valor) => { 
  let retorno = null;
  if(valor!==null){
    retorno = valor.replace(/[\D]+/g,'');
    retorno = pad_with_zeroes(retorno,3);
    retorno= retorno.replace(/([0-9]{2})$/g, ".$1"); 
    retorno = parseFloat(retorno).toFixed(2); 
  }
  return retorno;
}

const CampoMonetario = ({label, id, value, onChange, maxlength, enabled, size, obrigatorio }) => (
  <CampoTexto label={label} id={id} value={formatarMonetario(value)} onChange={(event)=> { event.target.value=limparFormatacao(event.target.value); onChange(event); } } enabled={enabled} size={size} obrigatorio={obrigatorio} maxlength={maxlength} />
);
CampoMonetario.propTypes = {
  label: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  enabled: PropTypes.bool.isRequired,
  maxlength: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
export default CampoMonetario;