function Post({titulo,autor,conteudo}){
    return(
        <div className="ex14">
            <h1>Componente Post</h1>
            <h2>{titulo}</h2>
            <p>{autor}</p>
            <section>{conteudo}</section><hr/>


        </div>
    )
}

export default Post