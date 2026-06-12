function Cabecalho({nome}){

    return(
        <header className="cabecalho">
            <h1>Painel de Controle</h1>
            <p>Bem vindo de volta, <strong>{nome}</strong></p>
        </header>
    )
}

export default Cabecalho