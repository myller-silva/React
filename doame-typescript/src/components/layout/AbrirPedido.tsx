import './AbrirPedido.css';

function AbrirPedido() {

    function abrirPedido() {
        console.log("abrir pedido");
    }

    return(
        <div className='AbrirPedido'>
            <button onClick={abrirPedido}>Abrir pedido</button>
        </div>
    )
}

export default AbrirPedido;