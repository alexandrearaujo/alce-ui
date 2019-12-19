import React, { Component } from "react";
import PropTypes from "prop-types";
import  CampoInformacaoAlerta, {TIPO_MENSAGEM} from "../CampoInformacaoAlerta";
import IconeVoltar from "@material-ui/icons/ArrowBackRounded";
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit * 2,
    },
    absolute: {
      position: 'fixed',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 3,
      zIndex: 10
    },
  });

class Titulo extends Component {
  
    render() {
        const { mensagensErro, mensagensSucesso, mensagensAtencao, exibeBotaoVoltar, classes, eventoVoltar } = this.props; 
        if(( exibeBotaoVoltar===undefined || exibeBotaoVoltar ) && (eventoVoltar===undefined || eventoVoltar === null) ) {
            alert('Configure o evento do botão de retorno.');
        }
        return (
            <div>
               
                <div className="conteudo">
                    <CampoInformacaoAlerta mensagens={mensagensErro} tipo={TIPO_MENSAGEM.ERRO} />
                    <CampoInformacaoAlerta mensagens={mensagensSucesso} tipo={TIPO_MENSAGEM.SUCCESSO} />
                    <CampoInformacaoAlerta mensagens={mensagensAtencao} tipo={TIPO_MENSAGEM.ATENCAO} />
                    {exibeBotaoVoltar===undefined || exibeBotaoVoltar ? <Tooltip title="Voltar" aria-label="Voltar">
        <Fab color="primary" className={classes.absolute}>
            <IconeVoltar  onClick={eventoVoltar}/>
        </Fab>
      </Tooltip> : null } 
                    <div className="linha titulo"></div> 
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Titulo);

Titulo.propTypes = {
    exibeBotaoVoltar: PropTypes.bool.isRequired,
};


