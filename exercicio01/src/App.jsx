import Titulo from "./components/Titulo";
import Paragrafo from "./components/Paragrafo";
import Imagem from "./components/Imagem"
import Logo from './assets/logo.png'
import Botao from "./components/Botao";
import Usuario from "./components/Usuario";
import Produto from "./components/Produto";
import Saudacao from "./components/Saudacao";
import CardSimples from "./components/CardSimples";
import Rodape from "./components/Rodape";
import Mensagem from "./components/Status";
import Status from "./components/Status";


function App(){
    return(

        
        <section className="components">
        <Titulo titulo= "Um titulo em React"/>

        <Paragrafo paragrafo= "Isto é um Paragrafo"/>
        
        <Imagem imagem = {Logo}/>

        <Botao label = "Enviar" />

        <Usuario nome = "Guilherme"  idade = {25} />

        <Produto nomeProduto = "Notebook" precoProduto={3500}/>

        <Saudacao saudacao = "Guilherme" />

        <CardSimples nomeTitulo="Avatar" nomeDescricao= "O Melhor filme de todos os tempos" />

        <Rodape ano ={2026} />

        <Status mensagem = "Online" />

    


        



        </section>
        
        
    
    )
    
}

export default App;