import React from "react";
import PropTypes from "prop-types";  
import TextField from '@material-ui/core/TextField'; 
import { withStyles } from '@material-ui/core/styles';
import {REGRAS_VALIDACOES} from './FormularioUtil';


const styles = theme => ({
  paper: {
      flexGrow: 1,
      color: '#ffffff',
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      marginBottom: theme.spacing.unit

  },
  textfield: {
      width: '100%',
      paddingBottom: "10px",
      margin: "16px 0 0 0",
      position: "relative",
      verticalAlign: "unset",
  },
  resize: {
      fontSize: 18
  },
});
const dateToString = (data) => { 
  let retorno = null;  
  if(data!==null && typeof data  === 'object') {
    retorno = data.toISOString().substring(0, 10); 
  } else if(typeof data  === 'string' && data.length>=9) {
    let dia = data.substring(0,2);
    let mes = data.substring(3,5);
    let ano = data.substring(6,10);
    retorno = ano + '-' + mes + '-' + dia; 
  } 
  return retorno;
}

const stringToDate = (dataString) => { 
  let retorno = ''; 
  if(dataString!==null && dataString!==undefined && dataString!==""){
    let datas = dataString.split("-");
    if(parseInt(datas[0])>1000){
      retorno = new Date(parseInt(datas[0]),parseInt(datas[1])-1,parseInt(datas[2]));
    }
  } 
  return retorno;
}
 

class Calendario extends React.Component {

  constructor() {
    super();
    this.state = {
      mensagens:null
    }
  }

  render(){
   const { label, id, onChange,  enabled, obrigatorio, value, classes,onBlur } = this.props;

   let {validacoes} = this.props;

   let {mensagens} = this.state;
  
   const onBlurLocal = (e) => {  
    let mensagensERRO = [];
    if(obrigatorio){
      if(!validacoes){
        validacoes= [];
      }
      validacoes.push(REGRAS_VALIDACOES.OBRIGATORIO)
    }
    if(validacoes){
        for(let i=0; i< validacoes.length ; i++ ){
          let mensagem = validacoes[i](value);
          if(mensagem!==null){ 
              mensagensERRO.push(mensagem);
              break;
          }
        }
    } 
    if(mensagensERRO.length===0){
      mensagensERRO=null;
    }
    this.setState({
      mensagens: mensagensERRO
  });
    if(onBlur) onBlur(e); 
 }
  
 const cssErro = { 
  borderBottom: '2px solid red'
 };

 const cssInfo = { 
  borderBottom: 'none'
 };

 const isError = mensagens!==null;
 const validado = isError?'false':'true';

  return <TextField className={classes.textfield} label={label} placeholder={label} // error={touched && error} helperText={error}  
            disabled={enabled!=undefined && !enabled}
            fullWidth
            onBlur={onBlurLocal} 
            error={isError}
            helperText={isError?mensagens:null}
            //style={isError?cssErro:cssInfo}
            type="date"
            id={id}
            required={obrigatorio}
            margin="normal"
            variant="outlined"
            format
            onChange={(event)=>{ onChange(stringToDate(event.target.value)); }}
            value={ value===null ? '' : dateToString(value) }
            //Date={new Date()}
            InputLabelProps={{
                shrink: true,
              }} 
            InputProps={{
              classes: {
              input: classes.resize,
              },
            }}
            inputProps={ {validado:validado } } 
            defaultValue={null}
            />;
          }
        }

Calendario.propTypes = { 
  label: PropTypes.string.isRequired, 
  id: PropTypes.string.isRequired, 
  enabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired, 
};
export default withStyles(styles)(Calendario);