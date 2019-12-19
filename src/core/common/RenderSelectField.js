import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid'; 

 
const RenderSelectField = ({input, label,  name, classes,items, xs, meta: {touched, error}, children, ...custom}) => (
    <Grid item xs={xs}>
            <FormControl error={touched && error}   variant="outlined">
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Select            {...input}
                                   native {...custom}  inputProps={{name: {label}, id: {name} }}>
                    <option value=''/> {
                        items.map(item => {
                            return <option value={item.value}>{item.label}</option>;
                        })
                    }
                </Select>
                {renderFromHelper({touched, error})}
            </FormControl>
    </Grid>
);

const renderFromHelper = ({touched, error}) => {
    if (!(touched && error)) {
        return;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

export default RenderSelectField;
