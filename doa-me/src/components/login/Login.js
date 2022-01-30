import FormLogin from "./FormLogin";
import style from './style.module.css'

function Login() {
    return(
        <div className={style.containerLogin}>
            <div className={style.titulo}>
                <h2>Entrar</h2>
            </div>
            <div className={style.containerLoginForm}>
                <FormLogin/>
            </div>
        </div>
    )
}

export default Login;