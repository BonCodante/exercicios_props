function Aluno({nome,nota}){

    return(
        
        <section className="ex18">
            <h1>Componente Aluno </h1>
            <p>{nome}</p>
            <h2>{nota >= 7 ? "Aprovado" : "Reprovado"}</h2> <hr/>
            
        </section>
    )
}

export default Aluno