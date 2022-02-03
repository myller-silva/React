// import {CgProfile} from 'react-icons/cg';
import {MdOutlineBloodtype} from 'react-icons/md';
import {RiHealthBookFill} from 'react-icons/ri';
import Btn from '../card/Btn.js';

import styles from './Doar.module.css';
import User from '../card/User.js';

function Doar() {

    function cancelar(e) {
        console.log("cancelar");
        console.log(e.target.parentNode.parentNode);
    }

    return(
        <div className={styles.card} >
            {/*  dados do usuario */}
            <User
                foto=""
                nomeUsuario = "Fulano da Silva"
                endereco = "Brooklyn"
            //  telefone para contato
            />
            <div className={styles.texto}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam...</p>
            </div>
            <hr/>
            <div className={styles.detalhes}>
                <ul>
                    <li><MdOutlineBloodtype/> Tipos sanguineo: tipoSanguineo </li>
                    <li><RiHealthBookFill/> Quantidade: quantidade </li>
                </ul>
            </div>
            {/* implementar barra de progresso */}
            <Btn onClick={cancelar} textoBtn = "Cancelar" />
            
        </div>
    )
}

export default Doar;