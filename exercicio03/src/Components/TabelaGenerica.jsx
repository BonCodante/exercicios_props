function TabelaGenerica({colunas,dados}){


  

    return(
        


      <>
      <h1>Componente Tabela Generica</h1>
      <table>
        <thead>
            <tr>
                {colunas.map(coluna => (
                    <th key={coluna .chave}>{coluna.cabecalho}</th>
                
                    
                ))}
                
            </tr>
        </thead>
        <tbody>
            {dados.map((linha, index) =>(
                <tr key={linha.id || index}>
                    {colunas.map(coluna => (
                        <td key={coluna.chave}>
                            {linha[coluna.chave]}
                        </td> 
                    ))}


                </tr>
                
            
            
            ))}

        </tbody>
        
       </table> 

       <hr />
       </> 
    ) 
} 

export default TabelaGenerica