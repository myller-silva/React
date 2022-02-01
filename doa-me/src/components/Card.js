import './Card.css';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';


function Card({ nomeUsuario, endereco, texto, tipoSanguineo, quantidade  }) {
    return(
    <div className="card">
        <div className="usuario">
            <div className="profile">
                <CgProfile/>
            </div>
            <div className="nome-endereco">
                <h3>{nomeUsuario}</h3>
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
            <button>Doar</button>
        </div>

    </div>
    )
}

export default Card;