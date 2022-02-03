import { CgProfile } from 'react-icons/cg';
import styles from './Card.module.css';

function User({urlFoto, nomeUsuario,  endereco}) {
    return(
        <div className={styles.usuario}>
            <div className={styles.profile}>
                {urlFoto?<img src={urlFoto} alt='foto'/>:<CgProfile/>}    
            </div>
            <div className={styles.nome_endereco}>
                <h3 className={styles.nome} >{nomeUsuario}</h3>
                <span>{endereco}</span>
            </div>
        </div>
    )
}

export default User;