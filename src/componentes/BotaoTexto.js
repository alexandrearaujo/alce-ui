import React from "react";
import PropTypes from "prop-types";
import Button from './template/CustomButtons/Button.jsx';

const BotaoTexto = ({id, value, onClick, disabled, type, color}) => (  
  <Button type={type ? type : 'button'} id={id} disabled={disabled} color={color ? color : 'primary'} onClick={onClick}> {value} </Button> 
);

BotaoTexto.propTypes = {
value: PropTypes.string.isRequired,
onClick: PropTypes.func,
};

export default BotaoTexto;