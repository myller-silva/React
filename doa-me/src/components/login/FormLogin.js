import style from './css/style.module.css';



function FormLogin() {
    
    return(
        <form className={style.FormLogin}>
            <div className={style.InputsForm}>
                <label>Email:</label>
                <input type="email" placeholder="Digite seu email"></input>
            </div>
            <div className={style.InputsForm}>
                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha"></input>
            </div>
            <div className={style.btnLogin } >
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default FormLogin;
