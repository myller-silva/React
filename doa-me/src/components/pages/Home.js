import Card from '../card/Card';

const textoBtn = "Doar";

function Home() {

    const doar=(e)=>{
        // e.preventDefault();
        console.log("doar");
        // console.log(e.target.parentNode.parentNode);
    }

    return(
        <div id="home">
            <h1>Todos os pedidos</h1>

            <Card 
                nomeUsuario = "Myller Silva"
                endereco = "Manaus - AM"
                texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam..."
                tipoSanguineo = "O+"
                quantidade = "2L"
                textoBtn = {textoBtn}
                onClick = {doar}
            />
                
        </div>
    )
}

export default Home;