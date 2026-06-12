import Comentario from "./Comentario";

function ListaComentarios(){
    return(
        <section className="ex15">
            <Comentario autor = "Guilherme" mensagem="Bem vindo"/>
            <Comentario autor = "Fernanda" mensagem="Olá, tudo bem?"/>
            <Comentario autor = "Bianca" mensagem="Bom-dia, com Jesus"/><hr/>
        </section>

    )
}

export default ListaComentarios