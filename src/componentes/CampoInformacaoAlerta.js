import React, {Component} from "react";
import PropTypes from "prop-types";   
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info'; 
import SnackbarContent from '../componentes/template/Snackbar/SnackbarContent.jsx';

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

class CampoInformacaoAlerta extends Component {

  

    render(){
       const { mensagens, tipo } = this.props; 
       return (
        mensagens !== undefined && mensagens !== null && mensagens.length > 0 ? <div > 
            <Mensagens mensagens={mensagens} tipo={tipo}  /> 
    </div> : null);
    }
}

const Mensagens = ({ mensagens, tipo, classes, className, Icon, ...other }) => (
    mensagens.map((mensagem, k) => {
        return <SnackbarContent key={k}
                  message={ mensagem}
                  color={tipo.color}
                  icon={tipo.icone}
                />;
    })
);


CampoInformacaoAlerta.propTypes = {
    mensagens: PropTypes.array.isRequired
};

export const TIPO_MENSAGEM = {
    ERRO: { cod: 1, icone: ErrorIcon, color:"danger" },
    SUCCESSO: { cod: 2,  icone: InfoIcon, color:"info" },
    ATENCAO: { cod: 3,  icone: WarningIcon, color:"warning" },
    INFO: { cod: 4,  icone: InfoIcon, color:"info"}
};

export default CampoInformacaoAlerta;