import FormLogin from "./FormLogin";

import style from './css/style.module.css';

function Login() {
    return(
        <div className={style.container}>
            <div className={style.containerLogin} >
                <div className={style.centralizar}>
                    <h2>Entrar</h2>
                </div>
                <div className={style.conteudoInferior}>
                    <div className={style.centralizar }>
                        <FormLogin/>
                    </div>
                    <div className={style.centralizar} >
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;