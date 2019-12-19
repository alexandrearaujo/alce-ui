import React, { Component } from "react";
import PropTypes from "prop-types";

import ArvoreLI from "./ArvoreLI";
import ArvoreUL from "./ArvoreUL";
import LinhaFormulario from "./LinhaFormulario"

export default class GridGenericaSimples extends Component {
    constructor() {
        super();
        this.state = {
             aberto: true
        }; 
        this.criarArvore = this.criarArvore.bind(this); 
    }

    criarArvore (objeto, nivel, funcRecursive, aberto, atencao) {
        if(nivel === undefined ){
            nivel = 0;
        }
        let propriedades = (objeto === undefined || objeto === null) ? [] : Object.getOwnPropertyNames(objeto); 
        let lis = propriedades.map(function (propriedade, k) { 
            return <ArvoreLI key={k} objeto={objeto} propriedade={propriedade} nivel={nivel} funcRecursive={funcRecursive} atencao={atencao} />
          })
          return <ArvoreUL key={k} conteudo={lis} aberto={aberto}/>;
    }
  
    render() {
         const {informacao, atencao} = this.props;
 
         
        return ( 
            (informacao === undefined || informacao === null) ? <div/> : 
            <LinhaFormulario componentes =  {this.criarArvore(informacao, 0, this.criarArvore, true, atencao)} />
        );
    }
}



