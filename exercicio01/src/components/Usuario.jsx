function Usuario({nome,idade}){
    return(
        <section className="ex05">
            <h1>Componente Usuario</h1>
            <strong>Nome: {nome}</strong><br/>
            <strong>Idade: {idade} </strong>
        </section>
    )
}

export default Usuario