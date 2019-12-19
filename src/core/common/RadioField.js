import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
        background: "#ffffff",
        flexGrow: 1,
        color: '#ffffff',
    },
    textfield: {
        width: '100%',
    },
    resize: {
        fontSize: 14
    },
    group: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    }
});
const RadioField = ({input,labelFor, label, items, xs, classes, ...rest}) => (
    <Grid item xs={xs}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup              {...input} aria-label={label} name={labelFor}    className={classes.group}  >{
                    items.map(item => {
                        return  <FormControlLabel value={item.value} control={<Radio value={item.value}   label={item.label}/>} label={item.label}/>;
                    })
                }
                </RadioGroup>
            </FormControl>

    </Grid>
);

export default withStyles(styles)(RadioField);