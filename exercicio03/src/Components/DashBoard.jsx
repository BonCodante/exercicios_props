import Cabecalho from "./Cabecalho"
import Cartao from "./Cartao"

function DashBoard({dadosEmpresa}){

    dadosEmpresa = {
        usuarioLogado: "Guilherme,", 
        totalVendas: "R$ 45.000",
        clientesAtivos: 145
    }
    return(

        <div className="container">
            <Cabecalho nome={dadosEmpresa.usuarioLogado}/>

            <main className="grid">
                <Cartao titulo="Total de Vendas" valor={dadosEmpresa.totalVendas}/>

                <Cartao titulo="Clientes Ativos" valor={dadosEmpresa.clientesAtivos}/>
            </main>


<hr/>
        </div>

    )
}

export default DashBoard