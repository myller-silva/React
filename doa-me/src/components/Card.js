import './Card.css';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';


function Card({ nomeUsuario, endereco, texto, tipoSanguineo, quantidade, tipo  }) {
    tipo = tipo[0].toUpperCase() + tipo.slice(1).toLowerCase();
    function evento(e) {
        if(tipo=="Doar"){
            // implementar funcao para doar
            console.log("Doar");
        }
        if(tipo=="Atualizar"){
            // implementar funcao para atualizar
            console.log("Atualizar");
        }
    }


    return(
    <div className="card">
        <div className="usuario">
            <div className="profile">
                <CgProfile/>
            </div>
            <div className="nome-endereco">
                <h3 className="nome">{nomeUsuario}</h3>
                <span>{endereco}</span>
            </div>
        </div>
        
        <div className="texto">
            <p>{texto}</p>
        </div>
        <hr/>
        <div className="detalhes">
            <ul>
                <li><MdOutlineBloodtype/> Tipos sanguineo: {tipoSanguineo} </li>
                <li><RiHealthBookFill/> Quantidade: {quantidade} </li>
            </ul>
        </div>

        {/* implementar barra de progresso */}

        <div className="btn">
            <button onClick={evento}>{tipo}</button>
        </div>

    </div>
    )
}

export default Card;