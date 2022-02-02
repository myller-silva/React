import './Btn.css';

function AbrirPedido() {
    function abrirPedido() {
        console.log("abrir pedido");
    }
    return(
        <div className="btnAbrirPedido">
            <button onClick={abrirPedido}>Abrir pedido</button>
        </div>
    )
}

export default AbrirPedido;