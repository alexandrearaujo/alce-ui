import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {capturarConteudoCompleto} from './FormularioUtil';


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

const CampoComboBox = ({ label, id, value, onChange, enabled, size, options, obrigatorio, classes }) => (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select
              enabled={enabled}
              value={value}
              onChange={(e) => onChange(options.lista[e.target.value])}
              inputProps={{
                name: {id},
                id: {id},
              }}
            >
              {options.exibeSeleciona=== undefined || options.exibeSeleciona ? <MenuItem value="">
                  <em>Selecione</em>
                </MenuItem>: null } 
                <OptionsSelectPaginacao  options={options} optionSelecionado={value} />
            </Select>
          </FormControl>
        </form>
);

const OptionsSelectPaginacao = ({ options, optionSelecionado }) => (
  options.lista.map(function (option, index) {      
    let id = options.atributoValor=== undefined || options.atributoValor===null ? option : capturarConteudoCompleto(option, options.atributoValor);      
    let descricao = options.atributoDescricao === null ? option : (options.exibeCodigo ? id+' - ':'' ) + capturarConteudoCompleto(option, options.atributoDescricao);
    let selecionado = optionSelecionado === undefined || optionSelecionado === null ? 0 : capturarConteudoCompleto(optionSelecionado, options.atributoValor);   
    return <MenuItem key={index} value={index} id={id} selected={selecionado===id}>{descricao}</MenuItem>
})
);

CampoComboBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampoComboBox); 