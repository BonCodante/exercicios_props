function Modal({titulo,conteudo,rodape}){
    return(

        <div className="overlay-fundo-escuro">

            <div className="caixa-modal">

                <div className="modal-cabecalho">
                    <h2>{titulo}</h2>
                </div>

                <div className="modal-corpo">
                    <section>{conteudo}</section>
                </div>
                
                <div className="modal-rodape">
                    <footer>{rodape}</footer>
                </div>


            </div>
<hr />
        </div>
    )
}

export default Modal