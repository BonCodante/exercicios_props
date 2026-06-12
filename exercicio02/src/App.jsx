import Perfil from "./components/Perfil"
import Avatar from './assets/Avatar.png'
import CardProduto from "./components/CardProduto"
import ListaUsuarios from "./components/ListaUsuarios"
import Post from "./components/Post"
import ListaComentarios from "./components/ListaComentarios"
import Guilherme from './assets/Guilherme.svg'
import CardComImagem from "./components/CardComImagem"
import TabelaSimples from "./components/TabelaSimples"
import Aluno from "./components/Aluno"
import Menu from "./components/Menu"
import Layout from "./components/Layout"



function App(){

  return(
  <section className="componentes">

    <Perfil foto = {Avatar} nome = "Guilherme" email = "guisoliveira1515@gmail.com"/>

    <CardProduto nome = "Iphone 16" preco ={3500} descricao = "Iphone 16, 128 Gigas em Oferta somente hoje, Compre agora" />

    <ListaUsuarios/>

    <Post titulo = "React JS" autor = "Guilherme" conteudo = "Aprendendo sobre Props" /> 

    <ListaComentarios/>

    <CardComImagem imagem ={Guilherme} titulo= "Meu Personagem" texto = "Meu Avatar no Lobby" />

    <TabelaSimples dados={["React","Java","Python"]} />

    <Aluno nome = "Vitoria" nota={5}/>

    <Menu dados={["Home", "Contato", "Produtos"]} />

    <Layout />

    

    







  </section>
  )
}

export default App