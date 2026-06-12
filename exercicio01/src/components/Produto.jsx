function Produto({nomeProduto,precoProduto}){
    return(
        <section className="ex06">
            <h1>Componente Produtos</h1>
            <strong>Nome : {nomeProduto}</strong><br/>
            <strong>Preço : R${precoProduto}</strong>
        </section>
        
    )
}

export default Produto