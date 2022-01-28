import { useState } from 'react';

function Form( ) {
    function cadastrarUsuario( event ) {
        // nao enviar o formulario pro servidor:
        event.preventDefault();    
        console.log(`Usuario: ${name}\nPassword: ${password}`);
    }

    // name: nome do atributo que será lido/resgatado
    // setName: o que será alterado
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        placeholder="digite seu nome" 
                        id="name" name="name" 
                        onChange={ (event) => setName(event.target.value)}
                    />                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="digite sua senha"
                        onChange={ (event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;