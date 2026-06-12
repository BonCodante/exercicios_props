function PaginaDinamica({configuracao}){
    return(
       <div className={`layout-${configuracao.tema}`}>
        <header>
            <h1>{configuracao.tituloPagina}</h1>
        </header>
        <main>
            {configuracao.conteudoPrincipal}
        </main> <br/>
        <footer>
            {configuracao.rodape}
        </footer>






       </div>
    )
}

export default PaginaDinamica