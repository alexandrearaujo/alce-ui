/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from 'react'; 
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'; 
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator'; 
import FormControl from "@material-ui/core/FormControl";
import {capturarConteudoCompleto,REGRAS_VALIDACOES} from "./FormularioUtil"; 
import CampoComboBox from '../componentes/template/CustomInput/CustomSelect.jsx';

const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 250,
      margin: '16px 0 0 0'
    },
    input: {
      display: 'flex',
      padding: 0,
    },
    formControl : {
      margin: '16px 0 0 0'
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
    chip: {
      margin: `${0}px ${theme.spacing.unit / 4}px`,
    },
    chipFocused: {
      backgroundColor: emphasize(
        theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
        0.08,
      ),
    },
    noOptionsMessage: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
      fontSize: 16,
      margin: '0 0 0 10px'
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      fontSize: 12,
    },
    paper: {
      position: 'absolute',
      zIndex: 1000,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing.unit * 2,
    },
  });


  const SingleValue = (props) => {
    return (
      <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
        {props.children}
      </Typography>
    );
  };

  
  const NoOptionsMessage = (props) => {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.noOptionsMessage}
        {...props.innerProps}
      >
        Sem resultados
      </Typography>
    );
  };
  
  const inputComponent = ({ inputRef, ...props }) => {
    return <div ref={inputRef} {...props} />;
  };
  
  const Control = (props) => {
    return (
      <TextField
        fullWidth
        error
        onChange={ (event)=>  props.selectProps.onChangeAutoComplete ? props.selectProps.onChangeAutoComplete(event.target.value) : null  }
        disabled={props.enabled !== undefined && !props.enabled}
        InputProps={{
          inputComponent,
          inputProps: {
            className: props.selectProps.classes.input,
            inputRef: props.innerRef,
            children: props.children, 
            disabled:props.enabled !== undefined && !props.enabled,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    );
  };
  
  const  Option = (props) => {
    return (
      <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component="div"
        disabled={props.enabled !== undefined && !props.enabled}
        style={{
          fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
      >
        {props.children}
      </MenuItem>
    );
  };
  
  const Placeholder = (props) => {
    return (
      <Typography
        color="textSecondary"
        className={props.selectProps.classes.placeholder}
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  };
  
   
  
  const ValueContainer = (props) => {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
  };
  
  const  MultiValue = (props) =>{
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        className={classNames(props.selectProps.classes.chip, {
          [props.selectProps.classes.chipFocused]: props.isFocused,
        })}
        onDelete={props.removeProps.onClick}
        disabled={props.enabled !== undefined && !props.enabled}
        variant="outlined"
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
  };
  
  const  Menu = (props) => {
    return (
      <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
        {props.children}
      </Paper>
    );
  };
  
  const components = {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
  };

class CampoTextoAutoComplete extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        mensagens:null
      }
    }

    tratarListaValue = (valor,multi) =>{
        let retorno = null;
        if(multi){
            retorno = valor.map(item => item.value);
        } else if(valor !=null){
            retorno = valor.value;
        }
        return retorno;
    }

    tratarValue = (valor,multi, atributoDescricao, atributoValor, exibeCodigo) =>{
        let retorno = null;
        if(multi){
            retorno = valor.map(item => { return {value: item, label: capturarConteudoCompleto(item, atributoDescricao)}; });
        } else if(valor !=null){
            retorno = { value: valor,  label:(exibeCodigo ? capturarConteudoCompleto(valor, atributoValor) + " - " : "") + capturarConteudoCompleto(valor, atributoDescricao) };
        }
        return retorno;
    }

    handleChange = (valor) =>{
        const {onChange, id, multi} = this.props; 
        onChange({
            target: {
                id: id,
                value: this.tratarListaValue(valor, multi)
            }
        });
    }

    
    
    render () {
      
          const { classes, theme, options, label, multi, id, enabled, obrigatorio,onBlur,onChange,onChangeAutoComplete } = this.props;
          let {value,validacoes} = this.props; 
          let {mensagens} = this.state;
          value = this.tratarValue(value, multi, options.atributoDescricao, options.atributoValor, options.exibeCodigo); 
          const suggestions = options.lista.map(suggestion => ({
            value: suggestion,
            label: (options.exibeCodigo ? capturarConteudoCompleto(suggestion, options.atributoValor) + " - " : "") + capturarConteudoCompleto(suggestion, options.atributoDescricao),
          }));

          const selectStyles = {
            input: base => ({
              ...base,
              root: {
                margin: '16px 0 0 0',
              },
              color: theme.palette.text.primary,
              '& input': {
                font: 'inherit',
                margin: "27px 0 0 0",
              },
            }),
          };

          const onBlurLocal = (e) => {  

            let valorTratado = value;

            if(multi && value.length===0){
              valorTratado=null;
            }
 
            let mensagensERRO = [];
            if(obrigatorio){
              if(!validacoes){
                validacoes= [];
              }
              validacoes.push(REGRAS_VALIDACOES.OBRIGATORIO)
            }
            if(validacoes){
                for(let i=0; i< validacoes.length ; i++ ){
                  let mensagem = validacoes[i](valorTratado);
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
          
         

        return  (  
          <FormControl className={classes.formControl}   
              required={obrigatorio} fullWidth  variant="outlined"  error={isError}  disabled={enabled !== undefined && !enabled} >
            <Select ref={(ref) => { this.select = ref; }}
            classes={classes}
            onChangeAutoComplete={onChangeAutoComplete}
            styles={selectStyles}
            onBlur={onBlurLocal} 
            required={obrigatorio}
            isDisabled={enabled !== undefined && !enabled}
            textFieldProps={{
              label: label,
              InputLabelProps: {
                shrink: value !== undefined && value !== '' && value !== null && (multi && value.length>0 || !multi),
              },
              variant: 'outlined' ,
              required: obrigatorio,
              helperText: isError?mensagens:null,
              error:isError,
              validado:validado,
              disabled:enabled !== undefined && !enabled
            }}
            error
            id={id}
            placeholder=""
            options={suggestions}
            components={components}
            value={value}
            onChange={this.handleChange} 
            isMulti={multi}
            isClearable={enabled === undefined || enabled}
            variant="outlined"
          /> 
          <input
                tabIndex={-1} 
                value={value}
                required={obrigatorio} 
                disabled={enabled !== undefined && !enabled}
                style={{
                    opacity: 0,
                    width: '100px',
                    height: '25px',
                    position: 'absolute',
                  }}
                onFocus={() => this.select.focus()}
            />
          </FormControl>);
}
}

export function ChoiceRendererAutoComplete(lista, atributoValor, atributoDescricao, exibeCodigo ) {
    this.lista = lista;
    this.atributoDescricao = atributoDescricao;
    this.atributoValor = atributoValor;
    this.exibeCodigo = exibeCodigo; 
  }

 
export default withStyles(styles, { withTheme: true })(CampoTextoAutoComplete);