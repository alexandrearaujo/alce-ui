import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import Menu from "./Menu";
import { realizarLogout } from '../../action/oauth';
import { getSistema } from '../../oauth/AuthStore'

 class Topo extends Component {
    constructor() {
        super();
        this.state = {
            ...this.props,
            dadosUsuario: {
                usuario: "NOME USUARIO",
                orgao: "NOME ORGAO",
                lotacao: "NOME LOTACAO",
                perfil: "NOME PERFIL",
                versao: " v.1.0.0",
                ambiente: "Desenvolvimento"
            }
        };
    }

    render() {
        const { dadosUsuario} = this.state;
        const sistema = getSistema();
        let renderizarDadosUsuarios = dadosUsuario;
        if(sistema!==null){ 
            renderizarDadosUsuarios = {
                usuario: sistema.Usuario.Nome,
                orgao: sistema.Usuario.Entidade.Sigla, 
                versao: " v.1.0.0",
                ambiente: sistema.Nome
            };
           
            if(typeof sistema.Grupos !== 'undefined' && sistema.Grupos !==null && sistema.Grupos.length > 0){
                renderizarDadosUsuarios.perfil = sistema.Grupos[0].Nome; 
            }
          
            if(typeof sistema.Usuario.Lotacoes !== 'undefined' && sistema.Usuario.Lotacoes !==null && sistema.Usuario.Lotacoes.length > 0){
                renderizarDadosUsuarios.lotacao = sistema.Usuario.Lotacoes[0].Tree;
            }
        } 
        return (
            <div className="superior">
                <div className="conteudo">
                    <div className="logotipo">
                        <a href="http://www.al.ce.gov.br" target="_blank" title="Assembléia Legislativa do Estado do Ceará"></a>
                    </div>
                    <Menu />
                    <div className="TituloSistema">
                        <a className="sistema" title="Ir para a página inicial">PROJUS</a><br/>                        
                    </div>	                
                    <Link className="guardiao" title="Sair do Sistema"  to="/logout" />
                    <div>

                    </div>
                    <div className="saudacao">
                        <div className="perfil">Seja bem-vindo, <span className="color_ffffff"><span />{renderizarDadosUsuarios.usuario}</span>! Entidade: <span className="color_ffffff">{renderizarDadosUsuarios.orgao}</span></div>
                        <div className="perfil">Lotação: <span className="color_ffffff">{renderizarDadosUsuarios.lotacao}</span> Perfil: <span className="color_ffffff">{renderizarDadosUsuarios.perfil}</span> Versão: <span className="color_ffffff">{renderizarDadosUsuarios.versao}</span></div>
                        <div className="perfil">
                            <Link title="Voltar para lista de Sistemas" to="/guardiao"
                                className="btnVoltarGuardiao" style={{ marginRight: '0px' }} />
                        </div>
                    </div>
                </div >
                <div style={{ position: 'relative', width: '100%', background: 'red', padding: '2px', color: '#fff', height: '13px', fontSize: '12px', top: '6px' }} id="containerLabelAmbiente"> <label className="sistema" id="labelAmbiente" style={{ textAlign: 'center' }}>{renderizarDadosUsuarios.ambiente}</label> </div >
            </div >
        );
    }
}
   

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ realizarLogout }, dispatch);
};

export default connect( mapDispatchToProps)(Topo);  
