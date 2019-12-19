import React from "react"; 
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch'; 
import FormHelperText from '@material-ui/core/FormHelperText'; 
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {primaryColor} from './jss/material-dashboard-react';


const styles = theme => ({
    root: {
      display: 'flex',
    },
    colorSwitchBase: {
      color: '#fff',
      '&$colorChecked': {
        color: primaryColor[1],
        '& + $colorBar': {
          backgroundColor: primaryColor[1],
        },
      },
    },
    colorBar: {},
    colorChecked: {},
    formControl: { 
      paddingBottom: "10px",
      margin: "27px 0 0 0",
      position: "relative",
      verticalAlign: "unset", 
    },
    group: {
      margin: `0px`,
    },
  });

const CampoRadio = ({ label, id, value, onChange, enabled, obrigatorio, classes}) => (
    <FormControl component="fieldset" className={classes.formControl}> 
           <FormControlLabel
            control={<Switch id={id} disabled={enabled!==undefined && !enabled}
                checked={value!==undefined && value!==null && value==='S'}
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar,
                }}
                onChange={(evento)=> {onChange({target: {id: id, value: evento.target.checked ? 'S' : 'N'} })} } 
                value={id ? id : 'simNao'}
              />}
              label={label} />
          {obrigatorio ? <FormHelperText>Campo obrigatório</FormHelperText>:null}
    </FormControl>
);

export default withStyles(styles)(CampoRadio);