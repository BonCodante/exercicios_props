function Formulario({ titulo, campos }) {

    return (

        <form className="formulario">
            <h2>{titulo}</h2>
            {campos.map((campo) => (
                <div key={campo.nome} className="campo">
                    <label>{campo.label}</label>

                    <input type={campo.tipo} name={campo.nome} placeholder={`Digite seu ${campo.label}`} />

                </div>



            ))}

            <button type="submit">Enviar</button>


<hr/>
        </form>
    )
}

export default Formulario