import styles from './Card.module.css';

function Btn({onClick, textoBtn}) {
    
    return(
        <div className={styles.btn}>
            <button onClick={onClick}>{textoBtn}</button>
        </div> 
    )
}

export default Btn