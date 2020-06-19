import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';

import Column from '../common/Column';

class DataTable extends React.Component {
    render() {
        const {data, classes, columns, actions} = this.props;
        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {columns.map(row => (
                            <TableCell>{row.name}</TableCell>
                        ))}
                        <TableCell align="center">AÇÕES</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(data && data.length) ?
                        data.map(row => (
                            <TableRow key={row.id}>
                                {columns.map(column => (
                                    <Column field={row[column.field]}/>
                                ))}
                                <TableCell align="center">
                                    {actions.edit ? (
                                        <IconButton className={classes.button} aria-label="Editar" color="primary"
                                                    onClick={event => actions.edit(event,row.id)}>
                                            <Icon>edit_icon</Icon>
                                        </IconButton>) : null}

                                    {(actions.disable) ? (
                                            <IconButton className={classes.button} aria-label="Desabiltar"
                                                        color="primary"
                                                        onClick={event => actions.disable(event,row.id)}>
                                                <Icon>info_icon</Icon>
                                            </IconButton>) : null}

                                    {(actions.remove) ? (
                                        <IconButton className={classes.danger} aria-label="Excluir"
                                                    onClick={event => actions.remove(event,row.id)}>
                                            <DeleteIcon/>
                                        </IconButton>) : null
                                    }


                                </TableCell>
                            </TableRow>
                        )) : ""
                    }
                </TableBody>
            </Table>
        );
    }
}

export default DataTable;
