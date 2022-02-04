// import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';
import User from './User';
import Btn from './Btn';
import './Card.css';

interface CardInterface{
    urlFoto: string;
    nome: string;
    endereco: string;
    tipoSanguineo: string;
    texto: string;
    quantidade: string;
    textoBtn: string;
    onClick():any;
}

function Card(card:CardInterface) {

    return(
        <div className='card' >
            {/*  dados do usuario */}
            <User
                urlFoto = {card.urlFoto}
                nome ={card.nome}
                endereco = {card.endereco}
            //  telefone para contato
            />
            <div className='texto'>
                <p>{card.texto}</p>
            </div>
            <hr/>
            <div className='detalhes'>
                <ul>
                    <li><MdOutlineBloodtype/> Tipos sanguineo: {card.tipoSanguineo} </li>
                    <li><RiHealthBookFill/> Quantidade: {card.quantidade} </li>
                </ul>
            </div>
            {/* implementar barra de progresso */}
            <Btn onClick={card.onClick}
                textoBtn = {card.textoBtn} 
            />
            
        </div>
    )
}

export default Card;