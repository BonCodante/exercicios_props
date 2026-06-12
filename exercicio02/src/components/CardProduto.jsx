function CardProduto({nome,preco,descricao}){

    return(
        <div className="card">
            <h1>Componente Card Produto</h1>
            <h2>{nome}</h2> <br/>
            <p>R$ {preco}</p> <br/>
            <span>{descricao}</span> <hr/>
        </div>
    )
}

export default CardProduto