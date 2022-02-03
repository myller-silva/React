// import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';
import Btn from '../card/Btn';
import User from '../card/User';
import './Doar.css';

interface DoarInterface{
    urlFoto: string;
    nome: string;
    endereco: string;
    texto: string;
    tipoSanguineo: string;
    quantidade: string;
    telefone: string;
    textoBtn: string;
    onClick(): any;
}

function Doar( ) {
    
    function cancelar() {
        console.log("cancelar");
    }

    let doar: DoarInterface = {
        urlFoto:"",
        nome:"Fulano da Silva",
        endereco:"Brooklyn",
        texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam...",
        tipoSanguineo:"O+",
        quantidade:"2L",
        telefone:"85 987654321",
        textoBtn:"Cancelar",
        onClick(){ cancelar() }
    }

    return(
        <div className='doar' >
            <User
                urlFoto={doar.urlFoto}
                nome = {doar.nome}
                endereco = {doar.endereco}
            />
            <div className='texto'>
                <p>{doar.texto}</p>
            </div>
            <hr/>
            <div className='detalhes'>
                <ul>
                    <li><MdOutlineBloodtype/> Tipos sanguineo: {doar.tipoSanguineo} </li>
                    <li><RiHealthBookFill/> Quantidade: {doar.quantidade} </li>
                </ul>
            </div>
            <hr></hr>
            <div>
                <span>Telefone: {doar.telefone}</span>  
            </div>
            <Btn onClick={cancelar} textoBtn = {doar.textoBtn}/>
        </div>
    )
}

export default Doar;