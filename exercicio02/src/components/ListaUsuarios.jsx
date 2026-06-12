import Usuario from "./Usuarios"



function ListaUsuarios(){
    return(
        <section className="ex13">
            <Usuario nome = "Guilherme" idade={25}/>
            <Usuario nome = "Pedro" idade={24}/>
            <Usuario nome = "Samuel" idade={23}/>
            <Usuario nome = "Gabriel" idade={22}/><hr/>


        </section>
    )
}

export default ListaUsuarios