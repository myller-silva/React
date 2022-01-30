
function FormCadastro() {
    return(
        <form >
            <div>
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder="Digite seu email"></input>
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha"></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar" id="btn-cadatrar"/>
            </div>
        </form>
    )
}

export default FormCadastro;