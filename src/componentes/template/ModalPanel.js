import React from "react";
import PropTypes from "prop-types";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent'; 
import DialogTitle from '@material-ui/core/DialogTitle';

import SepogUI, {LinhaBotoes,BotaoTexto, CampoInformacaoAlerta,TIPO_MENSAGEM} from "../../index";

 


const ModalPanel = ({ conteudo, botoes, modalAberto, evtFecharModal, titulo, exibeBotaoFechar, mensagensErro, mensagensSucesso, mensagensAtencao, telaCheia }) => (
  <Dialog
          fullScreen={telaCheia}
          open={modalAberto}
          onClose={evtFecharModal}
          scroll='body'
          aria-labelledby="scroll-dialog-title"
        >
        <DialogTitle id="scroll-dialog-title">{titulo}</DialogTitle>
        <DialogContent> 
          <div>
            <CampoInformacaoAlerta mensagens={mensagensErro} tipo={TIPO_MENSAGEM.ERRO} />
            <CampoInformacaoAlerta mensagens={mensagensSucesso} tipo={TIPO_MENSAGEM.SUCCESSO} />
            <CampoInformacaoAlerta mensagens={mensagensAtencao} tipo={TIPO_MENSAGEM.ATENCAO} />
          </div>
          {conteudo}
        </DialogContent>
        <DialogActions>
        <LinhaBotoes botoes={[
                  botoes,
                  (exibeBotaoFechar!==undefined && exibeBotaoFechar) ? <BotaoTexto value="FECHAR" onClick={evtFecharModal} /> : null
              ]} />
          </DialogActions>
  </Dialog>

);

 
ModalPanel.propTypes = {
  titulo: PropTypes.string.isRequired,
  conteudo: PropTypes.array.isRequired,
  botoes: PropTypes.array.isRequired,
  modalAberto: PropTypes.bool.isRequired,
  evtFecharModal: PropTypes.func.isRequired,
  exibeBotaoFechar: PropTypes.bool.isRequired
};
export default ModalPanel;