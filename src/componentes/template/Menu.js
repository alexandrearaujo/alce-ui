import React, { Component } from "react";
import { Link } from 'react-router-dom'

import ItemMenu from './ItemMenu';
import ItemMenuComSubMenu from './ItemMenuComSubMenu';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuAberto: false
        };
        this.evtMenu = this.evtMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.evtFechar = this.evtFechar.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        if (e.target.parentElement.className === "link" || !this.node.contains(e.target)) {
            setTimeout( ()=> {this. evtFechar()}
              , 100 )
        }
    }


    evtMenu(e) {
        const { menuAberto } = this.state;
        this.setState({ menuAberto: !menuAberto });
    }

    evtFechar() {
        this.setState({ menuAberto: false });
    }



    render() {
        const { menuAberto } = this.state;
        return (
            <div>
                <div className="navegacao" ref={node => this.node = node}  >
                    <div className="botao" id="botaoMenu" onClick={this.evtMenu} ></div>
                    <div className={`menu ${menuAberto ? 'aberto' : 'fechado'}`} style={{ display: menuAberto ? 'block' : 'none' }}     >
                        <ul>
                            <ItemMenu rota="/" titulo="INÍCIO" />
                            <ItemMenuComSubMenu titulo="PESSOAL" subMenus={[
                                <ItemMenu rota="/funcionario" titulo="Dados Pessoais" id="menuFuncionarios"/>,
                            ]} />
                          

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

