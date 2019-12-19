import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "@material-ui/core/InputLabel";
import TextField from '@material-ui/core/TextField';
import MaskedInput from 'react-text-mask';
import {REGRAS_VALIDACOES} from '../../FormularioUtil'
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check"; 
// core components
import customInputStyle from "../../jss/material-dashboard-react/components/customInputStyle.jsx";



function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    input,
    error,
    helperText,
    success, 
    onChange,
    touched,
    errors,
    obrigatorio,
    enabled,maxlength, mask, onBlur, showMask,
    value
  } = props; 

  let {validacoes} = props;



  const [mensagens, setMensagens] = useState(null);
 

 

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
    setMensagens(mensagensERRO);
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
 

  return ( <div>
    {mask ? <TextField 
              error={isError}
              className={classes.textfield}
              helperText={isError?mensagens:null}
              //style={isError?cssErro:cssInfo}
              disabled={!enabled}
              onChange={onChange}
              onBlur={onBlurLocal} 
              showMask={showMask}
              value={value} 
             // invalid={touched.command && errors.command ? true : false}
              validacoes = {validacoes}
              inputProps={ {mask : prepararMascara(mask), maxLength: maxlength, validado:validado , ...inputProps } } 
              InputProps={{
                inputComponent: InputMaskCustom, 
              }}
              InputLabelProps={{
                shrink: value!== undefined && value!==null,
              }}
              margin="normal"
              variant="outlined"
              label={labelText}
              id={id}
              fullWidth
              required={obrigatorio}  
            /> :  
          <TextField 
            error={isError}
            helperText={isError?mensagens:null}
            //style={isError?cssErro:cssInfo}
            disabled={!enabled}
            onChange={onChange}
            validacoes = {validacoes}
            inputProps={ {maxLength: maxlength , validado:validado, ...inputProps } }
            onBlur={onBlurLocal}   
            value={value} 
            margin="normal"
            variant="outlined"
            label={labelText}
            InputLabelProps={{
              shrink: value!== undefined && value!==null,
            }}
            id={id}
            fullWidth
            required={obrigatorio}  /> }
    </div>
  );
}



const prepararMascara = (mascaraTexto) => {
  let retorno = [];
  if(mascaraTexto && typeof mascaraTexto==="string"){
    for(let i=0; i< mascaraTexto.length ; i++){
      if(mascaraTexto[i]==="9"){
        retorno.push(/\d/);
      }  else {
        retorno.push(mascaraTexto[i]);
      }   
    }
  } 
  return retorno;
}

const InputMaskCustom = ( { inputRef,mask, id, ...other }) => (
     <MaskedInput
          {...other}
          ref={ref => {
            inputRef(ref ? ref.inputElement : null);
          }}
          id={id}
          mask={mask}
          placeholderChar={'\u2000'}
        />
);

InputMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});

export default withStyles(customInputStyle)(CustomInput);
