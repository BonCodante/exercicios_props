function Menu({dados}){
    return(
        <section className="ex019">
            <h1>Componente Menu</h1>

            {dados.map((nome) => {
                return <a href="">
                        {nome}
                        <br/>
                        
                    </a> 
             
            
            })}
            <hr/>
        </section>
    )
}

export default Menu