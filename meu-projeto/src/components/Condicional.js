import { useState } from "react";
// useState serve para manipulacao de dados dos componentes

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        // nao enviar formulario
        e.preventDefault();
        setUserEmail(email);    
    }

    function limparEmail() {
        setUserEmail();        
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {/* {userEmail} */}
                {/* renderizacao condicional(if). leitura: "se tem userEmail execute essa div"*/}
                {userEmail &&(
                    <div>
                        <p>o email do usuario é: {userEmail} </p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;