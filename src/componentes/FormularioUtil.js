
export const capturarConteudoCompleto = function (objeto, atributo) {
  if (atributo == null) {
    return objeto
  }
  const atributos = atributo.split(".");

  let retorno = objeto;
  for (let i = 0; i < atributos.length; i++) {
    retorno = ( retorno[atributos[i]] === null || typeof retorno[atributos[i]] === 'undefined' )? '-' : retorno[atributos[i]];
  }
  return retorno;
}


export const MASCARA_ENUM = {
    CPF:  {regex:"/^(\d{3})(\d{3})(\d{3})(\d{2})/", formato: "$1.$2.$3-$4"}
}

export const removerItemArray = function(array, item,atributoId){
  let filtered = array.filter(function(valor){
    return capturarConteudoCompleto(item, atributoId) !== capturarConteudoCompleto(valor, atributoId);
  });
  return filtered;
}
 

export const contemItemArray = function(array, item, atributoId){
  let encontrou = false;
  for(let i=0; i< array.length ; i++){
    if(capturarConteudoCompleto(array[i], atributoId)===capturarConteudoCompleto(item, atributoId)){
      encontrou = true;
      break;
    }
  }
  return encontrou;
}

export const REGRAS_VALIDACOES = {
  OBRIGATORIO: (conteudo) => {
    const MENSAGEM_ERRO="Campo obrigatório!";
    if(conteudo==='' || conteudo===null){
      return MENSAGEM_ERRO;
    } else {
      return null;
    }
  },
  CPF: (strCPF) => {
    var Soma;
    var Resto;
    let MENSAGEM_ERRO="CPF Inválido!";
    if(strCPF==='' || strCPF===null){
      return null;
    }
    Soma = 0;
      if (strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" ||
      strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || 
      strCPF == "88888888888" || strCPF == "99999999999" ) return MENSAGEM_ERRO;
        
      for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
      
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return MENSAGEM_ERRO;
      
      Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
      
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return MENSAGEM_ERRO;
        return null;
    },
  CNPJ: (cnpj) => {
        let MENSAGEM_ERRO="CNPJ Inválido!";
        cnpj = cnpj.replace(/[^\d]+/g,'');
    
        if(cnpj == '') return MENSAGEM_ERRO;
        
        if (cnpj.length != 14)
            return MENSAGEM_ERRO;
    
        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" || 
            cnpj == "11111111111111" || 
            cnpj == "22222222222222" || 
            cnpj == "33333333333333" || 
            cnpj == "44444444444444" || 
            cnpj == "55555555555555" || 
            cnpj == "66666666666666" || 
            cnpj == "77777777777777" || 
            cnpj == "88888888888888" || 
            cnpj == "99999999999999")
            return MENSAGEM_ERRO;
            
        // Valida DVs
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0,tamanho);
        let digitos = cnpj.substring(tamanho);
        soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return MENSAGEM_ERRO;
            
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
              return MENSAGEM_ERRO;
              
        return null;
        
    }
}