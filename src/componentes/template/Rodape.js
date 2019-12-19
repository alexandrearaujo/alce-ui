import React, { Component } from "react";

export default class Rodape extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>
                <div className="inferior">
                    <div className="apoio"></div>
                    <div className="conteudo">
                        <div className="fio"></div>
                        <div className="logotipo"><a href="http://www.al.ce.gov.br" target="_blank" title="Assembléia Legislativa do Estado do Ceará"></a></div>
                    </div>
                </div>
            </div>
        );
    }
}

