import React, { Component } from "react";
import classNames from 'classnames'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';  
import Tooltip from '@material-ui/core/Tooltip'; 
import { lighten } from '@material-ui/core/styles/colorManipulator';
import {capturarConteudoCompleto} from './FormularioUtil';
import Card from '../componentes/template/Card/Card.jsx';
import CardBody from '../componentes/template/Card/CardBody.jsx';

function desc(a, b, orderBy) {
  var orderByList = orderBy.split(".");
  
  if (orderByList.length > 1) {
    var atributo = orderByList[1];
  }

  var campoB = atributo !== undefined && atributo !== null && b[orderByList[0]] !== undefined ? b[orderByList[0]][atributo] : b[orderByList[0]];
  var campoA = atributo !== undefined && atributo !== null && a[orderByList[0]] !== undefined ? a[orderByList[0]][atributo] : a[orderByList[0]];

  if (campoB < campoA) {
    return -1;
  }
  if (campoB > campoA) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
      };
    
      render() {
        const {  order, orderBy,  rowCount , rows, fetchPaginacao } = this.props;
    
        return (
         
          <TableHead>
            <TableRow>
              
              {rows.map(
                row => (
                  <TableCell
                    key={row.id}
                    align={'center'
                        //row.numeric ? 'right' : 'left'
                    }
                    padding={row.disablePadding ? 'none' : 'default'}
                    sortDirection={orderBy === row.id ? order : false}
                  > {row.id==='acoes' ? row.label :
                    <Tooltip
                      title="Sort"
                      placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                      enterDelay={300}
                    >
                      <TableSortLabel
                        active={orderBy === row.id}
                        direction={order}
                        onClick={this.createSortHandler(row.id)}
                      >
                        {row.label}
                      </TableSortLabel>
                </Tooltip> }
                  </TableCell>
                ),
                this,
              )}
            </TableRow>
          </TableHead> 
        );
      }
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
  });
  
  let EnhancedTableToolbar = props => {
    const {  classes, tituloTabela } = props;
  
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: false,
        })}
      >
        <div className={classes.title}>
            <Typography variant="h6" id="tableTitle">
                {tituloTabela}
            </Typography>
        </div>
        <div className={classes.spacer} />
        
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);
  
  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 1020,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });
  
  class EnhancedTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        order: 'asc',
        orderBy: 'calories',
        data: [],
        page: 0,
        rowsPerPage: typeof props.rowsPerPage ==='undefined' ? 5 :  props.rowsPerPage,
      };
      this.baseState = this.state ;
    } 

    componentWillReceiveProps(props) {
      const {refresh} = this.props; 
      if (props.refresh !== refresh) {
        this.setState(this.baseState);
      }
    }
  
    handleRequestSort = (event, property) => {
      const orderBy = property;
      let order = 'desc';
  
      if (this.state.orderBy === property && this.state.order === 'desc') {
        order = 'asc';
      }
  
      this.setState({ order, orderBy });
    };
  
    handleChangePage = (event, page) => {
      const {fetchPaginacao} = this.props;
      const {rowsPerPage} = this.state; 
      if(fetchPaginacao){
        let {paginacaoNumeroElementos} = this.props; 
        if(!paginacaoNumeroElementos){
          paginacaoNumeroElementos=0;
        }
        fetchPaginacao(page, rowsPerPage)
      } 
      this.setState({ page });
      
    };
  
    handleChangeRowsPerPage = event => {
      const {fetchPaginacao} = this.props;
      const {page} = this.state;
      const rowsPerPage = event.target.value; 
      if(fetchPaginacao){
        let {paginacaoNumeroElementos} = this.props; 
        if(!paginacaoNumeroElementos){
          paginacaoNumeroElementos=0;
        }
        fetchPaginacao(page * rowsPerPage, rowsPerPage)
      } 
      this.setState({ rowsPerPage: rowsPerPage });
    };

    criarColunas = () =>{
        const {  colunas, opcoesColuna } = this.props; 
        let retorno =  colunas.map(coluna => {
            return { id: coluna.atributo, numeric: false, disablePadding: false, label: coluna.titulo, mascara: coluna.mascara };
        });  
        if(opcoesColuna){
            retorno.push({ id: 'acoes', numeric: false, disablePadding: false, label: 'AÇÕES' });
        }
        return retorno;
    }

    render() {
      const { classes, titulo, opcoesColuna, lista, fetchPaginacao,paginacaoNumeroPaginas} = this.props;
      let {paginacaoNumeroElementos} = this.props;
      let rowsPerPageProps = this.props.rowsPerPage;
      const { order, orderBy, page } = this.state;
      let {rowsPerPage} = this.state;

      let data = lista;
      let colunas = this.criarColunas(); 
      if(data === undefined || data ===null) {
        data = [];
      }

      if(!paginacaoNumeroElementos){
        paginacaoNumeroElementos = data.length;
      }

      let rowsPerPageOptions = [5, 10, 25, 50, 100];
       
      const emptyRows = 0;//rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage); 
  
      const listaTratada = fetchPaginacao ? stableSort(data, getSorting(order, orderBy)).slice(0,rowsPerPage) : 
      stableSort(data, getSorting(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage); 

      return (
        <Card><CardBody>
        <Paper className={classes.root}>
          {titulo ? <EnhancedTableToolbar  tituloTabela={titulo} /> : null }
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead 
                order={order}
                orderBy={orderBy} 
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
                rows = {colunas}
              />
              <TableBody>
                {listaTratada.map((n,key) => { 
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)} 
                        tabIndex={-1}
                        key={n.id} 
                        style={{backgroundColor: (key%2 == 0) ? '#fff': 'rgba(0, 0, 0, 0.07)'}}
                      > 
                        {colunas.map((coluna, k) => {
                            return   coluna.id==='acoes' ? null : <TableCell key={k} align="center">{ coluna.mascara(capturarConteudoCompleto(n,coluna.id))}</TableCell>;
                        })} 
                        {opcoesColuna ? 
                            <TableCell align="center">{
                                opcoesColuna.map(function (opcao, k) {
                                    return opcao.onConfigure === undefined || opcao.onConfigure(n) ? ( <a style={{margin: '4px', cursor: 'pointer'}} key={k} onClick={() => opcao.acao(n)} title={opcao.title} >{opcao.icone}</a> ) : null;
                                })
                            }   
                        </TableCell> : null}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={paginacaoNumeroElementos}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage="Resultados por página"
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}` }
            backIconButtonProps={{
              'aria-label': 'Página Anterior',
            }}
            nextIconButtonProps={{
              'aria-label': 'Próxima Página',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
        </CardBody></Card>
      );
    }
  }
  
  EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export function GridGenericaSimplesColuna(atributo, titulo, largura) {
    this.atributo = atributo;
    this.titulo = titulo;
    this.largura = largura;
    this.mascara = (valor) =>{
      return valor;
    }
}

export function OpcaoColunaGrid(acao, icone, title, onConfigure) {
        this.acao = acao;
        this.icone = icone;
        this.title = title;
        this.onConfigure = onConfigure; 
}

export function GridGenericaSimplesColunaCPF(atributo, titulo, largura) {
  this.atributo = atributo;
  this.titulo = titulo;
  this.largura = largura;
  this.mascara = (valor) => {  
    return formatarCPF(valor);
  }
}

export function GridGenericaSimplesColunaMonetario(atributo, titulo, largura) {
    this.atributo = atributo;
    this.titulo = titulo;
    this.largura = largura;
    this.mascara = (valor) => {  
      return "R$ "+ formatarNumerico(valor);
    }
}

export function GridGenericaSimplesColunaPercentual(atributo, titulo, largura,mascara) {
  this.atributo = atributo;
  this.titulo = titulo;
  this.largura = largura;
  this.nascara = (valor) => {  
    return formatarNumerico(valor)+" %";
  }
}

const formatarNumerico = (valor) => {  
  let retorno = "0,00";
  if(valor!==null){  
    valor = pad_with_zeroes(valor + '',3); 
    valor = parseInt(valor.replace(/[\D]+/g,''));  
    valor = pad_with_zeroes(valor + '',3);
    valor = valor.replace(/([0-9]{2})$/g, ",$1");
    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }  
    retorno =   "" + valor;
  }
  return retorno; 
}

function formatarCPF(cpf){
  if(cpf){
    cpf = cpf + "";
    cpf = pad_with_zeroes(cpf + '',11); 
    cpf=cpf.replace(/\D/g,"");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return cpf;
  }else{
    return "";
  }
}

const pad_with_zeroes = (number, length) => {

  let my_string = '' + number;
  while (my_string.length < length) {
      my_string = '0' + my_string;
  }

  return my_string;

}

  export default withStyles(styles)(EnhancedTable);

  