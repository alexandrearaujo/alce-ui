import React from "react"; 

export function Dicionario(tag, nome, descricao) {
    this.tag = tag;
    this.descricao = descricao;
    this.nome = nome; 
  }

export const MENSAGENS = [
    new Dicionario("evtInfoEmpregador","Evento de informações do empregador",""),
    new Dicionario("ideEvento","Identificação do Evento",""),
    new Dicionario("ideEmpregador","Identificação do empregador",""),
    new Dicionario("infoEmpregador","Informações do Empregador",""),
    new Dicionario("inclusao","Inclusão de novas informações",""),
    new Dicionario("idePeriodo","Período de validade das informações incluídas",""),
    new Dicionario("infoCadastro","Informações do empregador",""),
    new Dicionario("dadosIsencao","Informações Complementares -Empresas Isentas - Dados da Isenção",""),
    new Dicionario("contato","Informações de contato",""),
    new Dicionario("infoOP","Informações relativas a Órgãos Públicos",""),
    new Dicionario("infoEFR","Informações relativas a Ente Federativo Responsável -EFR",""),
    new Dicionario("infoEnte","Informações relativas ao ente federativo estadual, distrital ou municipa",""),
    new Dicionario("infoOrgInternacional","",""),
    new Dicionario("Informações exclusivas de organismos internacionais e outras instituições extraterritoriais","",""),
    new Dicionario("softwareHouse","Informações do desenvolvedor do Software",""),
    new Dicionario("infoComplementares","Informações complementares sobre o declarante",""),
    new Dicionario("situacaoPJ","Informações Complementares - Pessoa Jurídica",""),
    new Dicionario("situacaoPF","Informações Complementares - Pessoa Física",""),
    new Dicionario("alteracao","Alteração das informações",""),
    new Dicionario("tpAmb","Identificação do ambiente",""),
    new Dicionario("procEmi","Processo de emissão do evento",""),
    new Dicionario("verProc","Versão do processo de emissão do evento.  Informar a versão do aplicativo emissor do evento",""),
    new Dicionario("tpInsc","Tipo de inscrição",""),
    new Dicionario("nrInsc","Número de inscrição",""),
    new Dicionario("iniValid","Início da validade",""),
    new Dicionario("fimValid","Fim da validade",""),
    new Dicionario("nmRazao","Razão social",""),
    new Dicionario("classTrib","Classificação tributária",""),
    new Dicionario("natJurid","Natureza Jurídica",""),
    new Dicionario("indCoop","Indicativo de Cooperativa",""),
    new Dicionario("indConstr","Indicativo de Construtora",""),
    new Dicionario("indDesFolha","Indicativo de Desoneração da Folha",""),
    new Dicionario("indOptRegEletron","Indicativo registro eletrônico de empregados",""),
    new Dicionario("indEntEd","Indicativo de entidade educativa sem fins lucrativos que tenha por objetivo a assistência ao adolescente e à educação profissional",""),
    new Dicionario("indEtt","Indicativo de Empresa de Trabalho Temporário",""),
    new Dicionario("nrRegEtt","Número do registro da Empresa de Trabalho Temporário no Ministério do Trabalho.",""),
    new Dicionario("nmCtt","Nome do contato ",""),
    new Dicionario("cpfCtt","CPF do contato",""),
    new Dicionario("foneFixo","Telefone fixo",""),
    new Dicionario("foneCel","Telefone celular",""),
    new Dicionario("email","E-mail",""),
    new Dicionario("nrSiafi","Número SIAFI",""),
    new Dicionario("ideEFR","É o Ente Federativo Responsável - EFR ?",""),
    new Dicionario("cnpjEFR","CNPJ do Ente Federativo Responsável - EFR",""),
    new Dicionario("nmEnte","Nome do Ente Federativo",""),
    new Dicionario("uf","Unidade da Federação",""),
    new Dicionario("codMunic","Código do município IBGE",""),
    new Dicionario("indRPPS","Possui Regime Próprio de Previdência Social - RPPS ?",""),
    new Dicionario("subteto","Poder a que se refere o subteto",""),
    new Dicionario("vrSubteto","Valor do subteto do Ente Federativo",""),
    new Dicionario("indAcordoIsenMulta","Acordo internacional para isenção de multa?",""),
    new Dicionario("cnpjSoftHouse","CNPJ da empresa desenvolvedora do softwar",""),
    new Dicionario("telefone","Telefone",""),
    new Dicionario("indSitPJ","Situação da Pessoa Jurídica",""),
    new Dicionario("indSitPF","Situação da Pessoa Física",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),
    new Dicionario("","",""),



] ;

export const recuperarTag = (tag) => {
   let retorno = null; 
    for( let i=0; i<MENSAGENS.length; i++){
        if(MENSAGENS[i].tag.toUpperCase()===tag.toUpperCase()){
            retorno = MENSAGENS[i];
            break;
        }
   }
   return retorno;
};

export default recuperarTag;