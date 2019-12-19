import React from "react";
import PropTypes from "prop-types";
import CardBody from "./template/Card/CardBody.jsx"

const LinhaFormulario = ({ componentes, size }) => (
  
<CardBody>
    {componentes}
</CardBody>
);
LinhaFormulario.propTypes = {
  componentes: PropTypes.array.isRequired
};
export default LinhaFormulario;