function Evento() {

    function meuEvento() {
        console.log("Evento ativado");
        // alert("Evento ativado");
    }

    return (
        <div>
            <p>Clique para ativar um evento:</p>   

            {/* obs: nao colocar a funcao com parenteses, pois senao irá invocar a funcao ao inves de esperar o click */}
            <button onClick={meuEvento}>Ativar!</button>

        </div>
    )
}


export default Evento;