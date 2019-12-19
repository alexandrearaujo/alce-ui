import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';


 
const RenderTextField = ({
    label,
    input,
    classes, 
    xs,
    textArea,
    enabled,
    meta: {touched, invalid, error},
    ...custom

}) => (
    <Grid item xs={xs}>
        <TextField  label={label} placeholder={label}  error={touched && error} helperText={error} multiline={textArea}
            {...input}
            disabled={enabled !==undefined && !enabled}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
            classes: {
             
            },
        }}/>

    </Grid>
);

export default RenderTextField;
