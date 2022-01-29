import Button from './Button'


function Evento() {

    function meuEvento() {
        console.log("Ativando meu primeiro evento");
    }
    function segundoEvento() {
        console.log("Ativando meu segundo evento");
    }

    return (
        <div>
            <p>Clique para ativar um evento:</p>   

            {/* obs: nao colocar a funcao com parenteses, pois senao irá invocar a funcao ao inves de esperar o click */}
            {/* <button onClick={meuEvento}>Ativar!</button> */}
            
            <Button text="primeiro evento" event={meuEvento}  />
            <Button text="segundo evento" event={segundoEvento}  />

        </div>
    )
}

export default Evento;