import React from "react";
import PropTypes from "prop-types";
import  {BotaoTexto,LinhaFormulario,LinhaBotoes} from "../../index";


import ModalPanel from "./ModalPanel";

const ConteudoModalConfirmar = ({ mensagem }) => (
  <LinhaFormulario componentes={[
    <label className="linha formulario"> {mensagem} </label>
  ]}
  />
);

const BotoesModalConfirmar = ({ modalAberto, evtConfirma, evtCancela, titulo }) => (
  <LinhaBotoes botoes={[
    <BotaoTexto value="CONFIRMAR" onClick={evtConfirma} />,
    <BotaoTexto value="CANCELAR" color="secondary" onClick={evtCancela} />
  ]} />
);

const ModalConfirmarPanel = ({ modalAberto, evtConfirma, evtCancela, titulo, mensagem }) => (
  <ModalPanel modalAberto={modalAberto} titulo="Confirmar" conteudo={ <ConteudoModalConfirmar mensagem={mensagem} />} botoes={<BotoesModalConfirmar evtConfirma={evtConfirma} evtCancela={evtCancela} />} />
);
ModalConfirmarPanel.propTypes = {
  titulo: PropTypes.string.isRequired,
  mensagem: PropTypes.string.isRequired,
  modalAberto: PropTypes.bool.isRequired,
  evtConfirma: PropTypes.func.isRequired,
  evtCancela: PropTypes.func.isRequired
};
export default ModalConfirmarPanel;