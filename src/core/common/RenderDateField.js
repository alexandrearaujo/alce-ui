import React from 'react';
import TextField from '@material-ui/core/TextField';
 
const RenderDateField = ({
    label,
    input,
    classes,  
    textArea,
    enabled,
    meta: {touched, invalid, error},
    ...custom

}) => (
 

<TextField className={classes.textfield} label={label} placeholder={label}  error={touched && error} helperText={error} multiline={textArea}
           {...input }
            //value={dateToString(input.value)}
            disabled={enabled!=undefined && !enabled}
            fullWidth
            type="date"
            margin="normal"
              variant="outlined"
            InputLabelProps={{
                shrink: true,
              }}
            InputProps={{ 
        }}/>
 
);

const dateToString = (data) => { 
    console.log('tratar data');
    console.log(data);
    console.log('tipo data');
    console.log(typeof data);
    let retorno = data;
    if(typeof data  === 'object') {
        console.log('obj aqui');
        retorno = data.toISOString().substring(0, 10);
    } else if (typeof data  === 'string' && data.length>11){
        console.log('string aqui');
        retorno = data.substring(0, 10);
    }
    console.log('retorno');
    console.log(retorno);
    return retorno;
  }

export default RenderDateField;
