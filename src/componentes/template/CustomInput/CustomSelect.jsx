import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { capturarConteudoCompleto,REGRAS_VALIDACOES } from '../../FormularioUtil'; 
// core components
import customInputStyle from "../../jss/material-dashboard-react/components/customInputStyle.jsx";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  outlined: {
    left: '-6px',
    paddingLeft: '7px',
    paddingRight: '7px',
    background: '#fff',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});



  class CustomSelect extends React.Component {

    constructor() {
      super();
      this.state = {
        mensagens:null
      }
    }

    getValue = () => {
      const {options, value} = this.props;

      

      let result = options.lista.find(obj => {
        if(value !== null && value !== undefined && options.atributoValor!==null){
          return obj[options.atributoValor] === value[options.atributoValor];
        } else if(value !== null && value !== undefined && options.atributoValor===null){
          return obj === value;
        } else {
          return null;
        }
      });
  
      return result;
    };

    
 

    render() {
      const {classes,formControlProps,label,id,labelProps,inputProps,input,error,helperText,success,options,enabled,onChange, obrigatorio,onBlur} = this.props;
      
      let {value,validacoes} = this.props;

      let {mensagens} = this.state;

      if(value===undefined || (value!==null && value[options.atributoValor]===null)){
        value = null;
      }
      

      const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
      });

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

      return ( 
          <FormControl className={classes.formControl} //style={isError?cssErro:cssInfo}  
          required={obrigatorio} fullWidth  variant="outlined"  error={isError}
            {...formControlProps}
          //TODO className={formControlProps.className + " " + classes.formControl}
          >
            {label !== undefined ? (
              <InputLabel shrink={value !== undefined && value !== '' && value !== null}
                 className={classes.outlined} 
                 style={{
                  left: '-6px',
                  paddingLeft: '7px',
                  paddingRight: '7px',
                  background: '#fff',
                }}
                htmlFor={id}
                {...labelProps}
              >
                {label}
              </InputLabel>
            ) : null}
            <Select ref={(ref) => { this.select = ref; }}
              //TODO classes={{ root: marginTop,   disabled: classes.disabled,  underline: underlineClasses   }}
              aria-describedby="component-error-text" 
              value={this.getValue()}
              onBlur={onBlurLocal} 
              {...inputProps}
              {...input}
              required={obrigatorio}
              input={
                <OutlinedInput name={id}  id={id} required={obrigatorio} />
              }
              inputProps={{required:obrigatorio, validado:validado}}
              onChange={(evento) => onChange(evento.target.value)}
              disabled={enabled !== undefined && !enabled}
            >
              {options.exibeSeleciona === undefined || options.exibeSeleciona ? <MenuItem value="">
                <em>--Selecione--</em>
              </MenuItem> : null}
              {options.lista.map(function (option, index) {
                let idCampo = options.atributoValor === undefined || options.atributoValor === null ? option : capturarConteudoCompleto(option, options.atributoValor);
                let descricao = options.atributoDescricao === null ? option : (options.exibeCodigo ? idCampo + ' - ' : '') + capturarConteudoCompleto(option, options.atributoDescricao);
                return <MenuItem key={index} value={option} >{descricao}</MenuItem>
              })}
            </Select>
            {isError ?
              <FormHelperText>{mensagens}</FormHelperText>:null
            }

          <input
                tabIndex={-1} 
                value={this.getValue()}
                required={obrigatorio} 
                style={{
                    opacity: 0,
                    width: '100px',
                    height: '25px',
                    position: 'absolute',
                  }}
                onFocus={() => this.select.focus()}
            />
          </FormControl> 
          
      );
    }
  }

CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomSelect);