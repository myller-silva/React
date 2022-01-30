function Card({imagem, nome, localizacao, texto, tipoSanguineo, quantidade}) {
    return(
        <div className="card">
            {/* foto de perfil */}
            
            <h2>{nome}</h2>
            <p>{localizacao}</p>
            <p>Tipo sanguineo:</p>

            <p>{texto}</p>
            <button>Doar</button>
        </div>
    )
}

export default Card;