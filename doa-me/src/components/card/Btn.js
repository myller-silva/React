import { useState } from 'react';
import styles from './Card.module.css';
function Btn({onClick, textoBtn}) {
    
    // [onClick, setOnClick]= useState();
    

    return(
        <div className={styles.btn}>
            <button onClick={useState}>{textoBtn}</button>
        </div>
    )
}

export default Btn