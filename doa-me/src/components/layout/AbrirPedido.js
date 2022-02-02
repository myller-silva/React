import styles from './AbrirPedido.module.css';

function AbrirPedido() {

    function abrirPedido() {
        console.log("abrir pedido");
    }

    return(
        <div className={styles.btn}>
            <button onClick={abrirPedido}>Abrir pedido</button>
        </div>
    )
}

export default AbrirPedido;