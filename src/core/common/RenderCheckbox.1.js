import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

class RenderCheckbox extends React.Component {
    render() {
        const { input: { value, onChange }, xs, label, name} = this.props;
        return (
            <Grid item xs={xs}>

                <FormControlLabel
                    control={
                        <Checkbox onChange={onChange} label={label}         value={value} />
                    }
                    label={label}
                />
            </Grid>
        );
    }
}

export default RenderCheckbox;
