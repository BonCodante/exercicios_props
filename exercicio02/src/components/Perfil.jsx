function Perfil({nome,email,foto}){
    return(
        <section className="ex11">
            <h1>Componente Perfil</h1>
            <img src={foto} alt="Foto de Perfil" /><br/>
            <h2>{nome}</h2><br/>
            <span>{email}</span> <hr/>
        </section> 
    )
}

export default Perfil