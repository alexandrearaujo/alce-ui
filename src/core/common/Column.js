import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const Column = ({ row, classes, field }) => (
    <TableCell>{field}</TableCell>
);

export default Column;

