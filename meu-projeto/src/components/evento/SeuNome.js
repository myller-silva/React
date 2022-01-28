// import { useState } from "react";

function SeuNome( {setNome} ) {
    // const [nome, setNome] = useState();
    return(
        <div>
            <p>digite o seu nome:</p>
            <input 
                type="text" 
                placeholder="Qual é o seu nome?"
                onChange={ (e) => setNome(e.target.value) }
            />

        </div>
    )
}

export default SeuNome;