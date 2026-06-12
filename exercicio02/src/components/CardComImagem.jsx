import './CardComImagem.css'

function CardComImagem({imagem,titulo,texto}){

    return(
        <section className="ex16">
            <h1>Componente Card com Imagem</h1>
            <img src={imagem} alt="" />
            <h2>{titulo}</h2>
            <p>{texto}</p>
            <hr/>
            





        </section> 
    )
}

export default CardComImagem