import React from "react";
import PropTypes from "prop-types";
import CardFooter from "./template/Card/CardFooter.jsx"

const LinhaBotoes = ({ botoes }) => (
  <CardFooter>
    {botoes}
  </CardFooter>
);
LinhaBotoes.propTypes = {
  componentes: PropTypes.array.isRequired
};
export default LinhaBotoes;