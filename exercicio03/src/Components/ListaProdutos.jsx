import CardProduto from "./CardProduto"

function ListaProdutos({produtos}){
    return(
        <>
<h1>Componente Lista Produtos</h1>
        {produtos.map((item) =>{
            return <CardProduto
            produto={item.produto}
            preco={item.preco} 
            
            />
        })} <hr/>
        
        </>
    )
}

export default ListaProdutos