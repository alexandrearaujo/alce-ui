import React, { Component } from "react";
import PropTypes from "prop-types";
 

export default class ArvoreUL extends Component {
    constructor() {
        super(); 
    }
 

    render() {
        const { conteudo  } = this.props;

        return ( 
             <div className='arvore'  > {conteudo} </div>
        );
    }
}


 