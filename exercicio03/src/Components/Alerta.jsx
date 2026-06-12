function Alerta({tipo,mensagem}){
    
    const estilos = {
        sucesso:{ backgroundColor: "green"},
        erro: { backgroundColor: "red"},
        aviso:{ backgroundColor: "yellow"}
    }
    
    return(
<>
<h1>Componente Alerta</h1>
<section style={estilos[tipo]}>
    {mensagem}
</section>  

<hr/>   
</>
    )
}

export default Alerta