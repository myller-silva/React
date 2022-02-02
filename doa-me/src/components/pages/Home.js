import Card from '../card/Card';

function Home() {
    function doar() {
        console.log("doar");
    }

    return(
        <div id="Cards">
            <h1>Todos os pedidos</h1>

            <Card 
                nomeUsuario = "Myller Silva"
                endereco = "Manaus - AM"
                texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam..."
                tipoSanguineo = "O+"
                quantidade = "2L"
                onClick = {doar}
                textoBtn= "Doar"
            />
            
        </div>
    )
}

export default Home;