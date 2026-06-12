function Comentario({autor,mensagem}){
    return(
        <section className="ex15">
            <h1>Componente Comentário</h1>
            <p>{autor}</p>
            <span>{mensagem}</span>

        </section>
    )
}

export default Comentario