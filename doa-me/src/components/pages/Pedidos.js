import Card from "../Card";

const btnTipo = "Atualizar";

function Pedidos(   ) {
    return(
        <div>
            <h1>Seus pedidos</h1>
            <Card 
                nomeUsuario = "Myller Silva"
                endereco = "Manaus - AM"
                texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam..."
                tipoSanguineo = "O+"
                quantidade = "2L"
                tipo={btnTipo}
            />
        </div>
    )
}

export default Pedidos;