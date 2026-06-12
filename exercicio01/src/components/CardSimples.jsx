function CardSimples({nomeTitulo,nomeDescricao}){
    return(
        <div className="ex08">
            <h1>Componente Card Simples</h1>
            <h2>{nomeTitulo}</h2>
            <strong>{nomeDescricao}</strong>
        </div>
    )
}

export default CardSimples