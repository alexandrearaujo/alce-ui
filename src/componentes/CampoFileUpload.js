import React, { Component } from "react";
import BotaoTexto from "./BotaoTexto";
import CampoTexto from "./CampoTexto";
import PropTypes from "prop-types";
import  CampoInformacaoAlerta, {TIPO_MENSAGEM} from "./CampoInformacaoAlerta";
import GridContainer from './template/Grid/GridContainer';
import GridItem from './template/Grid/GridItem'

export default class CampoFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {   
      selectedFile: null,
      nomeArquivoSelecionado: "",
      anexarButton : true,
      extensoesValidas : ["doc", "docx", "xls", "xlsx", "txt", "jpg", "jpeg", "pdf", "dbf", "png", "gif",
      "tif", "zip", "shp", "gpx", "prj", "shx", "csv", "ods", "bmp", "flv", "mp4", "wmv", "avi" ],
      mostrarMsgInvalido: false,
      mostrarMsgSucesso: false,
      
    };    

    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  } 


  fileChangedHandler(e) {
    e.preventDefault();  
    //console.log(event.target.files[0]);
    this.setState({
      selectedFile: e.target.files[0],
      nomeArquivoSelecionado: e.target.files[0].name,
      anexarButton : false
    })
    
  }

  fileUploadHandler (e) {
    e.preventDefault();   
    const { opcoesUpload } = this.props;  
    var extensaoValida = false;  
    if(opcoesUpload.extensoesValidas != null){      
      for (var i = 0; i < opcoesUpload.extensoesValidas.length; ++i) {
        var extensao = opcoesUpload.extensoesValidas[i];
        if(this.state.selectedFile.name.includes(extensao)){
          extensaoValida = true;
          break;
        }

      }
    }else{      
      for (var i = 0; i < this.state.extensoesValidas.length; ++i) {
        var extensao = this.state.extensoesValidas[i];
        if(this.state.selectedFile.name.includes(extensao)){
          extensaoValida = true;
          break;
        }

      }
    }    
    if(extensaoValida){
      opcoesUpload.acao(this.state.selectedFile.name, this.state.selectedFile)
      this.setState({
        mostrarMsgInvalido: false,
        mostrarMsgSucesso: true
      })
    }else{
      this.setState({
        mostrarMsgInvalido: true,
        mostrarMsgSucesso: false        
      })
    }
    
  }

  render() {
    return (
      <div className="conteudo">
        
      </div>,
      <div>      
          <div className="App">            
            <input style={{display: 'none'}} 
                    type="file" 
                    onChange={this.fileChangedHandler} 
                    ref={fileInput => this.fileInput = fileInput}
             />             
             <CampoInformacaoAlerta mensagens={this.state.mostrarMsgInvalido ? ['Extensão do arquivo não permitido.'] : []} tipo={TIPO_MENSAGEM.ERRO} />    
             <CampoInformacaoAlerta mensagens={this.state.mostrarMsgSucesso ? ['Arquivo anexado com sucesso.'] : []} tipo={TIPO_MENSAGEM.SUCCESSO} />           
             <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CampoTexto label="Arquivo Selecionado:" id="arqSelcionado" value={this.state.nomeArquivoSelecionado}  maxlength={100} enabled={false} size={3} obrigatorio={false} />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <BotaoTexto value={"Selecionar Arquivo"} disabled={this.props.disabled} onClick={() => this.fileInput.click()}></BotaoTexto>
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <BotaoTexto value={"Anexar"} onClick={this.fileUploadHandler} disabled={this.props.disabled && this.state.anexarButton}></BotaoTexto>         
                </GridItem>
            </GridContainer>
            
          </div>
        
      </div>
    )
  }

}


export function OpcoesUploadGenerico(acao, disabled, extensoesValidas) {
  this.acao = acao;  
  this.disabled = disabled;  
  this.extensoesValidas = extensoesValidas;
}

OpcoesUploadGenerico.propTypes = {
  acao: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  extensoesValidas: PropTypes.array.isRequired
};