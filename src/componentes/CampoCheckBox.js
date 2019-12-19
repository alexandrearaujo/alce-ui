import React from "react"; 
import {capturarConteudoCompleto,contemItemArray} from "./FormularioUtil";

const CampoCheckBox = ({ label, id, onChange, enabled, size, obrigatorio, choiceRenderer, itensSelecionados, campoId }) => (

  <div className={`coluna c_${size} ${ ( enabled!==undefined && !enabled) ?'desabilitado':''}`}>
      <label  htmlFor={id} className={(typeof obrigatorio === 'undefined' || obrigatorio===null || !obrigatorio)?'':'obrigatorio'}>{label}</label>
      <div className="campo checkbox texto_upper">
        <MultiSelect
          choiceRenderer={choiceRenderer}
          itensSelecionados={itensSelecionados}
          onChange={onChange} 
          enabled = {enabled}
          id={id}
          size={size}
          campoId={campoId}
        />
      </div>
  </div>
);

const MultiSelect = ( {id, choiceRenderer, itensSelecionados, onChange, enabled, size, campoId } ) => {
  return ( <div className="linha">  
    { choiceRenderer.lista.map( (item, key) => {
      return <InputCheck id={`${id}_${key}`} indice={key} item={item} onChange={onChange} choiceRenderer={choiceRenderer} size={size} enabled={enabled} checked={contemItemArray(itensSelecionados,item, "id")} />
    }) }
  </div> );
}

const InputCheck = ({id, indice, onChange, item, choiceRenderer, enabled , checked}) => {
  return (<div className={ (choiceRenderer.alinhamentoHorizontal=== undefined || choiceRenderer.alinhamentoHorizontal === null || choiceRenderer.alinhamentoHorizontal ) ? `` : "linha"} >
    <input type="checkbox" value={item.descricao} id={id} checked={checked} onChange={() => onChange(item)} value={indice} enabled={ enabled===undefined || enabled===null || enabled } />
    <label className="rotulo_check" for={id}>{capturarConteudoCompleto(item, choiceRenderer.atributoDescricao)}</label>
  </div>);
}

export function ChoiceRendererCheck(lista, atributoDescricao, alinhamentoHorizontal ) {
  this.lista = lista;
  this.atributoDescricao = atributoDescricao; 
  this.alinhamentoHorizontal= alinhamentoHorizontal;
}

 
 
export default CampoCheckBox;