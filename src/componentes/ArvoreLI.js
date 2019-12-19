import React, { Component } from "react";
import PropTypes from "prop-types";



export default class ArvoreLI extends Component {
    constructor() {
        super();
        this.state = {
            aberto: true
        };
        this.abrirFechar = this.abrirFechar.bind(this)
        this.verificarCabecalho = this.verificarCabecalho.bind(this)
        this.verificarLabel = this.verificarLabel.bind(this)
    }

    abrirFechar() {
        this.setState({ aberto: !this.state.aberto });
    }

    verificarCabecalho(propriedade, atencao) {
        if (atencao !== undefined) {
            for (let i = 0; i < atencao.length; i++) {
                if (atencao[i].nomeObjeto === propriedade) {
                    return "atencao";
                }
            }
        }
        return "";
    }

    verificarLabel(propriedade, atencao) {
        if (atencao !== undefined) {
            for (let i = 0; i < atencao.length; i++) {
                if (atencao[i].nomeCampo === propriedade) {
                    return "atencao";
                }
            }
        }
        return "";
    }


    render() {
        const { objeto, propriedade, nivel, funcRecursive, atencao } = this.props;
        const isCabecalho = (typeof objeto[propriedade] === 'object' && objeto[propriedade] !== null ) || Array.isArray(objeto[propriedade]) ;
        return (
            isCabecalho ?
                <div className="arvore_grupo">
                    <div onClick={() => this.abrirFechar()} className={"arvore_cabecalho " + this.verificarCabecalho(propriedade, atencao)}>
                        <a  >{propriedade}</a>
                    </div>
                    <div className={"arvore_corpo " + (this.state.aberto ? '' : 'fechado')} >
                        <div className="arvore_conteudo">
                            {funcRecursive(objeto[propriedade], nivel + 1, funcRecursive, this.state.aberto, atencao)}
                        </div>
                    </div>
                </div>
                :
                <div className="item"> <span className={"label " + this.verificarLabel(propriedade, atencao)}>  {propriedade}: </span> {objeto[propriedade]} </div>
        );
    }
}

