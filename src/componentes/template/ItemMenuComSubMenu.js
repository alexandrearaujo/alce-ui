import React, { Component } from "react";
import { Link } from 'react-router-dom'

import imgFechado from '../../../imagens/icone_down.png'
import imgAberto from '../../../imagens/icone_up.png'

export default class Menu extends Component {

    constructor() {
        super();
        this.state = {
            menuAberto: false
        }; 
        this.evtMenu = this.evtMenu.bind(this); 
    }
 

    evtMenu(e){
        const {menuAberto} = this.state;
        this.setState({ menuAberto: !menuAberto }); 
    }   

    render() { 
        const {titulo, subMenus} = this.props;
        const {menuAberto} = this.state;
        return (
            <div>
                <li ><a href="#" onClick={this.evtMenu} alt={titulo}>{titulo} <img src={menuAberto ? imgAberto : imgFechado} />   </a> </li>
                <li style={{ display: menuAberto ? 'block' : 'none' }}>
                    <ul>
                        {subMenus}
                    </ul>
                </li>
            </div>
        );
    }
}

