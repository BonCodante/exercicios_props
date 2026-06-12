function ListaFiltrada({itens, categoriaFiltro}){

    const itensFiltrados = itens.filter(item => item.categoria === categoriaFiltro)

    return(

<div className="lista">

    <h2>Itens da Categoria: {categoriaFiltro}</h2>

    <ul>
        {itensFiltrados.map((item) => (

<li key={item.id}>{item .nome}</li>
    ))}
    </ul>

    <hr/>
</div>

    )
}

export default ListaFiltrada