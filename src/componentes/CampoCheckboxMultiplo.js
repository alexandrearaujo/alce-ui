import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'; 
import {capturarConteudoCompleto} from './FormularioUtil';

class CheckboxGroup extends React.Component {

    verificarIndice = (item) =>{
        let {value, options} = this.props;
        if(value===undefined || value === null){
            value = [];
        }
        let index =-1;
        for( let i=0; i< value.length ; i++){
            if(capturarConteudoCompleto(value[i], options.atributoValor) === capturarConteudoCompleto(item, options.atributoValor)) {
                index = i;
                break;
            }
        }
        return index;
    }

    checkboxGroup = () => {
        let {label, required, options, classes,enabled, onChange, value, id} = this.props; 
        if(value===undefined || value === null){
            value = [];
        }

        return options.lista.map((option, index) => {
            let idCampo = options.atributoValor=== undefined || options.atributoValor===null ? option : capturarConteudoCompleto(option, options.atributoValor);      
            let descricao = options.atributoDescricao === null ? option : (options.exibeCodigo ? idCampo+' - ':'' ) + capturarConteudoCompleto(option, options.atributoDescricao);
            return (
            <FormControlLabel key={index}  className={classes.formControlLabel}
                control={<Checkbox  disabled={enabled!=undefined && !enabled}
                           name={`${id}[${index}]`}
                           value={descricao}
                           checked={  this.verificarIndice(option) !== -1 }
                           classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                           onChange={(event) => { 
                               if (event.target.checked) {
                                    value.push(option);
                               } else {
                                    value.splice(value.indexOf(option), 1);
                               }  
                               return onChange({ target:{
                                    id:id,
                                    value: value
                                }
                               });
                           }}
                        /> }
                    label={descricao}
                /> );
        });
    }

    render() {
        const {classes, input, label} = this.props;
        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className={classes.formLabel}> {label}</FormLabel>
                    <FormGroup className={classes.formGroup}>
                        {this.checkboxGroup()}
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
      display: 'flex', 
      paddingTop:'5px'
    },
    formControlLabel:{ 
    },
    formLabel:{
        marginBotton:'0px'
    },
    formGroup: {
      marginLeft: '5px',
      marginTop: 0,
    },
    check:{
        color: '#ccc',
        '&$checked': {
            color: '#64A9A4',
        }
    },
    checked:{}
  });

export function ChoiceRendererCheckboxMultiplo(lista, atributoValor, atributoDescricao, exibeCodigo ) {
    this.lista = lista;
    this.atributoDescricao = atributoDescricao;
    this.atributoValor = atributoValor;
    this.exibeCodigo = exibeCodigo; 
  }

export default withStyles(styles)(CheckboxGroup);