import './Home.css';
import Card from '../Card';

function Home() {
    return(
        <div className="container-home">
            <h2>Todos os pedidos</h2>

            <Card 
                nomeUsuario = "Myller Silva"
                endereco = "Manaus - AM"
                texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam..."
                tipoSanguineo = "O+"
                quantidade = "1L"
            />

            <Card 
                nomeUsuario = "Gabriel Queiroz"
                endereco = "Fortaleza - CE"
                texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam..."
                tipoSanguineo = "O+"
                quantidade = "1L"
            />

            <Card 
                nomeUsuario = "Rodrigo Abreu"
                endereco = "Maracanau - CE"
                texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam..."
                tipoSanguineo = "O+"
                quantidade = "1L"
            />

        </div>
    )
}

export default Home;