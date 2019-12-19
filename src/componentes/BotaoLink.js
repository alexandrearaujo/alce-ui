import React from "react";
import PropTypes from "prop-types";
import Button from './template/CustomButtons/Button.jsx';

const BotaoLink = ({value, link , disabled, mesmaAba, id, color}) => ( 
    <Button type={'button'} id={id} disabled={disabled} color={color ? color : 'primary'} onClick={()=> (typeof mesmaAba==="undefined" || mesmaAba===null || mesmaAba ) ? window.location=link : window.open(link, '_blank')}> {value} </Button> 
);

BotaoLink.propTypes = {
    value: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  };

export default BotaoLink;