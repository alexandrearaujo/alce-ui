import React from "react";
import PropTypes from "prop-types";
const BarraProgresso = ({ label, tamanho, valor, id }) => (
  <div className="linha formulario">
    <div className="coluna completo ">
      <div className="componenteBarraProgresso">
        <label htmlFor={id} >{label}:</label>
        <div className="componentProgress" id={id} >
          <div className="progress">
            <div className={"progress-bar progress-bar-pmf " + (valor === tamanho ? ' completo' : '')} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: `${((valor * 100) / tamanho).toFixed(1)}%` }} >
              <div className="valor">{((valor * 100) / tamanho).toFixed(1)}% </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
BarraProgresso.propTypes = {
  tamanho: PropTypes.number.isRequired,
  valor: PropTypes.number.isRequired,
};
export default BarraProgresso;