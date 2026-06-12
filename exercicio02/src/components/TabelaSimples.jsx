function TabelaSimples({dados}){

return( 
 
    <>
    <h1>Componente Tabela Simples</h1>
    <table>
        
    {dados.map((item) =>{
        return <tr>
                <td>{item}</td>
                </tr> 
        
        
    })}

</table>
<hr/>
    </>
)
}

export default TabelaSimples