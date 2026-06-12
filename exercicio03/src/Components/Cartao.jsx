function Cartao({titulo,valor}){

    return(
        <div className="cartao">
            <h3>{titulo}</h3>
            <h2 className="valor-extremo">{valor}</h2>
        </div>
    )
}

export default Cartao