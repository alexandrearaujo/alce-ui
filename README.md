# SEPOG UI Core


## Sobre SEPOG UI Core

SEPOG UI é conjunto de componentes necessário para você criar sites e apps com HTML5 & JavaScript.
Baseados em componentes REACT, contém um conjunto de ótimos widgets de UI, essencial para desenvolvimento de grandes e inovadores experiêcias  com aplicações WEB.


## Funcionalidades(Componentes) SEPOG UI Core

- Arvore
- ArvoreLI
- ArvoreUL
- BarraProgresso
- BotaoLink
- BotaoTexto
- BotaoVoltar
- CabecalhoGrid
- CabecalhoGridOrdenacao
- CabecalhoPaginacaoGrid
- CampoComboBox
- CampoFileUpload
- CampoInformacaoAlerta
- CampoRadio
- CampoTexto
- ConteudoGrid
- DicionarioEventos
- FormularioUtil
- GridGenericaSimples
- ImagemLink
- ImageUpload
- Input
- LinhaBotoes
- LinhaFormulario
- Mensagens
- Select

#Uso do Sepog UI Core no projeto

## Configuração ambiente local para uso do nexus
_Nexus local (**http://nexus.al.ce.gov.br:8081/repository/npm-group**)_

* registrar servidor de pacotes **NPM** interno : _**npm set registry http://nexus.al.ce.gov.br:8081/repository/npm-group/**_

1. Baixar arquivo para login no nexus local **.npmrc** e colocá-lo no home settings do usuário de desenvolvimento.
    * Endereço: _C:\Users\ %user.local%_

##Usando SEPOG em seu projeto
 
1. Instalando o módulo SEPOG UI no projeto
    * instalando pacotes existentes **npm i --save-dev**
    * registrar servidor de pacotes **NPM** interno : _**npm set registry http://nexus.al.ce.gov.br:8081/repository/npm-group/**_
    * instalando pacote SEPOG UI **npm i alce-ui**
2. Usando na classe
    * realizar **import** : import { _*CLASSES*_ } from **"ALCE_UI"**;
    * import {LinhaFormulario,LinhaBotoes,BotaoTexto,CampoTexto} from "alce-ui";
    
 







*Copyright © 2019 SEPOG - Secretaria de Planejamento, Orçamento e Gestão. All Rights Reserved.*
