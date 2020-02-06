import Arvore from './componentes/Arvore';
import ArvoreLI from './componentes/ArvoreLI';
import ArvoreUL from './componentes/ArvoreUL';
import BarraProgresso from './componentes/BarraProgresso';
import BotaoLink from './componentes/BotaoLink';
import BotaoTexto from './componentes/BotaoTexto';
import BotaoVoltar from './componentes/BotaoVoltar'; 
import CampoRadio from './componentes/CampoSimNao';
import CampoTexto from './componentes/CampoTexto';
import DicionarioEventos from './componentes/DicionarioEventos';
import Calendario from './componentes/Calendario';
import CampoCheckBox, {ChoiceRendererCheck} from './componentes/CampoCheckBox'

import CampoCheckboxMultiplo, {ChoiceRendererCheckboxMultiplo} from './componentes/CampoCheckboxMultiplo'
import CampoTextoAutoComplete, {ChoiceRendererAutoComplete} from './componentes/CampoTextoAutoComplete'
import CampoTextArea from './componentes/CampoTextArea'


import ImagemLink from './componentes/ImagemLink';
import ImageUpload from './componentes/ImageUpload';
import Input from './componentes/Input';
import LinhaBotoes from './componentes/LinhaBotoes';
import LinhaFormulario from './componentes/LinhaFormulario';
import Mensagens from './componentes/Mensagens';
import CampoMonetario   from './componentes/CampoMonetario';
import CampoPorcentagem from './componentes/CampoPorcentagem'; 


import CampoInformacaoAlerta, {TIPO_MENSAGEM} from "./componentes/CampoInformacaoAlerta";
import Select, {ChoiceRenderer} from './componentes/Select';
import CampoComboBox from './componentes/template/CustomInput/CustomSelect.jsx';
import CustomTabs from './componentes/template/CustomTabs/CustomTabs.jsx';
import CampoFileUpload, { OpcoesUploadGenerico } from "./componentes/CampoFileUpload";
import GridGenericaSimples,{GridGenericaSimplesColuna, OpcaoColunaGrid,GridGenericaSimplesColunaMonetario, GridGenericaSimplesColunaCPF, GridGenericaSimplesColunaPercentual} from './componentes/GridGenericaSimples';
import {MASCARA_ENUM,capturarConteudoCompleto,contemItemArray,removerItemArray, REGRAS_VALIDACOES} from './componentes/FormularioUtil';



import Column  from './core/common/Column';
import DataTable  from './core/common/DataTable';
import ListItemLink  from './core/common/ListItemLink';
import RadioField  from './core/common/RadioField';
import RenderCheckbox  from './core/common/RenderCheckbox';
import RenderSelectField  from './core/common/RenderSelectField';
import RenderTextField  from './core/common/RenderTextField'; 
import RenderDateField  from './core/common/RenderDateField'; 
import {validateEmail, validateObrigatorio} from './core/common/Validates';

import FormBaseGeral from './componentes/baseGeral/FormBaseGeral';

import Card from './componentes/template/Card/Card.jsx';
import CardHeader from './componentes/template/Card/CardHeader.jsx';
import CardFooter from './componentes/template/Card/CardFooter.jsx';
import CardBody from './componentes/template/Card/CardBody.jsx';
import CardIcon from './componentes/template/Card/CardIcon.jsx';
import GridItem from './componentes/template/Grid/GridItem.jsx';
import GridContainer from './componentes/template/Grid/GridContainer.jsx';
import dashboardStyle from "./componentes/jss/material-dashboard-react/views/dashboardStyle.jsx"; 
import Navbar from "./componentes/template/Navbars/Navbar.jsx";
import Footer from "./componentes/template/Footer/Footer.jsx";
import Sidebar from "./componentes/template/Sidebar/Sidebar.jsx"; 
import stylesFormulario from "./componentes/jss/material-dashboard-react/layouts/stylesFormulario"

import ModalPanel from "./componentes/template/ModalPanel"; 
import ModalConfirmarPanel from "./componentes/template/ModalConfirmarPanel"; 

import Titulo from "./componentes/template/Titulo"; 
 


export {
    Arvore,
    ArvoreLI,
    ArvoreUL,
    BarraProgresso,
    BotaoLink,
    BotaoTexto,
    BotaoVoltar,
    Calendario,
    CampoComboBox,
    CampoFileUpload,
    CampoInformacaoAlerta,
    CampoRadio,
    CampoTexto,
    DicionarioEventos
    ,capturarConteudoCompleto,contemItemArray,removerItemArray,
    FormBaseGeral,
    GridGenericaSimples,
    GridGenericaSimplesColuna,
    GridGenericaSimplesColunaMonetario,
    GridGenericaSimplesColunaCPF,
    GridGenericaSimplesColunaPercentual,
    OpcaoColunaGrid,
    ImagemLink,
    ImageUpload,
    Input,
    LinhaBotoes,
    LinhaFormulario,
    Mensagens,
    Select,
    TIPO_MENSAGEM,
    ChoiceRenderer,
    OpcoesUploadGenerico,
    MASCARA_ENUM,
    CampoCheckBox,
    ChoiceRendererCheck,
    CampoCheckboxMultiplo,
    ChoiceRendererCheckboxMultiplo,
    CampoTextArea,
    CampoTextoAutoComplete, ChoiceRendererAutoComplete,
    CampoMonetario,
    CampoPorcentagem,

    Column  ,
    DataTable,
    ListItemLink ,
    RadioField ,
    RenderCheckbox ,
    RenderSelectField  ,
    RenderTextField ,
    RenderDateField,
    validateEmail, validateObrigatorio,  

    //novo layout
    Card,  CardHeader , CardFooter ,CardBody, CardIcon ,  GridItem , GridContainer , dashboardStyle, stylesFormulario, 
    Navbar, Footer, Sidebar, Titulo,
    ModalConfirmarPanel, ModalPanel, CustomTabs,

    REGRAS_VALIDACOES

};

