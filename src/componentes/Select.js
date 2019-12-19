import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import {capturarConteudoCompleto} from './FormularioUtil';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

 
const OptionsSelectPaginacao = ({ options, optionSelecionado }) => (
    options.lista.map(function (option, index) {      
      let id = options.atributoValor=== undefined || options.atributoValor===null ? option : capturarConteudoCompleto(option, options.atributoValor);      
      let descricao = options.atributoDescricao === null ? option : (options.exibeCodigo ? id+' - ':'' ) + capturarConteudoCompleto(option, options.atributoDescricao);
      let selecionado = optionSelecionado === undefined || optionSelecionado === null ? 0 : capturarConteudoCompleto(optionSelecionado, options.atributoValor);   
      return <MenuItem key={index} value={index} id={id} selected={selecionado===id}>{descricao}</MenuItem>
  })
);

const CustomSelect = ({ id, value, onChange, enabled , options, label }) => (
  <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Select
            value={value}
            onChange={onChange}
            inputProps={{
              name: id,
              id: id,
            }}
            disabled = {enabled!=undefined && !enabled}
          >
           {options.exibeSeleciona=== undefined || options.exibeSeleciona ?
            <MenuItem value={-1}>
              <em>-- SELECIONE --</em>
            </MenuItem>
            : null }
            <OptionsSelectPaginacao options={options} optionSelecionado={value} exibeSeleciona={options.exibeSeleciona} />
          </Select>
  </FormControl>
);


export function ChoiceRenderer(lista, atributoValor, atributoDescricao, exibeCodigo, exibeSeleciona ) {
  this.lista = lista;
  this.atributoDescricao = atributoDescricao;
  this.atributoValor = atributoValor;
  this.exibeCodigo = exibeCodigo;
  this.exibeSeleciona = exibeSeleciona;
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired, 
  onChange: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  exibeSeleciona: PropTypes.bool.isRequired,
  exibeCodigo: PropTypes.bool.isRequired
};
export default withStyles(styles)(CustomSelect);