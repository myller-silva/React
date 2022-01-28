// renderizacao de listas
function OutraLista({ itens }) {
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {// mapear cada um dos itens: itens.map()
            itens.length>0 ? (
                itens.map( (item, index) =>(
                    <p key={index}>{item}</p>
                    )
                )
            ):(
                <p>Lista vazia</p>
            )}
        </>
    )
    
}

export default OutraLista;