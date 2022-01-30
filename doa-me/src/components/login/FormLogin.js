function FormLogin() {
    return(
        <form >
            <div>
                <label>Email:</label>
                <input type="email" placeholder="Digite seu email"></input>
            </div>
            <div>
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha"></input>
            </div>
            <div>
                <input type="submit" value="Login" id="btn-login"/>
            </div>
        </form>
    )
}

export default FormLogin;
