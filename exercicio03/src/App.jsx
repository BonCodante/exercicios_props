import Card from "./Components/Card"
import ListaProdutos from "./Components/ListaProdutos"
import BotaoCustomizado from "./Components/BotaoCustomizado"
import Alerta from "./Components/Alerta"
import TabelaGenerica from "./Components/TabelaGenerica"
import Modal from "./Components/Modal"
import Dashboard from "./Components/DashBoard"
import Formulario from "./Components/Formulario"
import ListaFiltrada from "./Components/ListaFiltrada"
import PaginaDinamica from "./Components/PaginaDinamica"


function App(){

{/* Const usadas para o exercicio de tabela generica*/}
const colunasDaTabela = [
    { cabecalho: 'Nome do Usuário', chave: 'nome' },
    { cabecalho: 'Idade', chave: 'idade' }
   
  ];

  const dadosDosUsuarios = [
    { id: 1, nome: 'Guilherme', idade: 28 },
    { id: 2, nome: 'João', idade: 30 }
  ];
 


  {/* Const usada para o exercicio do Formulário */}
   const campos =[
    {nome: 'nome', label: 'Nome Completo', tipo: 'text'},
    {nome: 'email', label: 'E-mail', tipo: 'email'},
    {nome: 'senha', label: 'Senha', tipo: 'password'}
   ]


   {/* Const usada no exercicio ListaFiltrada */}

   const produtos = [
    {id: 1, nome: 'Notebook', categoria: 'Eletrônico'},
    {id: 2, nome: 'Celular', categoria: 'Eletrônico'},
    {id: 3, nome:  'TV', categoria: 'Eletrônico'}
   ]



    /* {Const usada no exercicio PaginaDinamica} */

    const configuracaoDaPagina ={
      tema: 'escuro',
      tituloPagina: 'Bem vindo a nossa Página',
      conteudoPrincipal: 'Aqui estamos aprendendo Props e estou usando Desestruturação',
      rodape: '© 2026 Todos Direitos Reservados'
    }

  return(
<>


<Card>
  <h1>Componente com Children</h1>
  <strong>Aprendendo sobre Children</strong> <br/>
  <button>Clique aqui</button>
</Card> <hr/>


<ListaProdutos produtos={[
  {produto: "Notebook", preco: 3500},
  {produto: "Celular", preco: 4500},
  {produto: "Tablet", preco: 2500}
]} />

  <BotaoCustomizado texto ="Clique nesse Botão" cor = "green"  tamanho="20px"/>

  
  <Alerta tipo="sucesso" mensagem="Cadastro realizado" />
  <Alerta tipo="erro" mensagem="Algo deu errado" />
  <Alerta tipo="aviso" mensagem="Atenção ao prazo" />

    
  
  <TabelaGenerica colunas={colunasDaTabela} dados={dadosDosUsuarios} />


  <Modal titulo="Aviso"
   conteudo={<p>Tem certeza que deseja excluir sua Conta?</p>}
   rodape={<button className="btn-perigo">Sim, quero excluir  </button>}
   />


   <Dashboard />

   <Formulario titulo="Meu Formulário" campos={campos}/>


   <ListaFiltrada itens={produtos} categoriaFiltro= "Eletrônico"/>

   <PaginaDinamica configuracao={configuracaoDaPagina} />
  </>

  )
}

export default App