import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() { 
        const {rota, titulo, id} = this.props;
        return (
             <li className="link" id={id}><Link to={rota}> {titulo} </Link> </li>
        );
    }
}

