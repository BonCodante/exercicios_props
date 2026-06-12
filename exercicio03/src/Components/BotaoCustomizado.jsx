function BotaoCustomizado({texto, cor, tamanho}) {
    return(
        <>
        <h1>Componente Botão Customizado</h1>
        <button style={{backgroundColor: cor , fontSize:tamanho}}>{texto}</button> <hr/>

        </>
    )
}
 
export default BotaoCustomizado