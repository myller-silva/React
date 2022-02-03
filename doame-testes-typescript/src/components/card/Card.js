// import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';
import Btn from './Btn';

import styles from './Card.module.css';
import User from './User';

function Card({ urlFoto, onClick, nomeUsuario, endereco, texto, tipoSanguineo, quantidade, textoBtn  }) {
    
    return(
        <div className={styles.card} >
            {/*  dados do usuario */}
            <User
                urlFoto = {urlFoto}
                nomeUsuario ={nomeUsuario}
                endereco = {endereco}
            //  telefone para contato
            />
            <div className={styles.texto}>
                <p>{texto}</p>
            </div>
            <hr/>
            <div className={styles.detalhes}>
                <ul>
                    <li><MdOutlineBloodtype/> Tipos sanguineo: {tipoSanguineo} </li>
                    <li><RiHealthBookFill/> Quantidade: {quantidade} </li>
                </ul>
            </div>
            {/* implementar barra de progresso */}
            <Btn onClick={onClick}
                textoBtn = {textoBtn} 
            />
            
        </div>
    )
}

export default Card;