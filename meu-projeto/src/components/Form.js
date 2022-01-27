function Form( ) {
    function cadastrarUsuario( event ) {
        // nao enviar o formulario pro servidor:
        event.preventDefault();
        console.log("usuario cadastrado");        
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;