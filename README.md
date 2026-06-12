# Exercícios de Props em React 📚

Este projeto contém **3 exercícios progressivos** de React focados em **Props** e **Componentização**. Cada exercício aumenta a complexidade e introduz novos conceitos.

---

## 📋 Estrutura dos Exercícios

### **Exercício 01 - Props Básicas** 🎯

Foca em **componentes simples** que recebem props básicas (strings, números, imagens).

**Componentes criados:**
- `Titulo` - Exibe um título com prop `titulo`
- `Paragrafo` - Exibe texto com prop `paragrafo`
- `Imagem` - Renderiza imagem com prop `imagem`
- `Botao` - Botão customizado com prop `label`
- `Usuario` - Card de usuário com props `nome` e `idade`
- `Produto` - Exibe produto com props `nomeProduto` e `precoProduto`
- `Saudacao` - Componente de saudação com prop `saudacao`
- `CardSimples` - Card genérico com props `nomeTitulo` e `nomeDescricao`
- `Rodape` - Rodapé com prop `ano`
- `Status` - Exibe status com prop `mensagem`

**Conceitos:** Props simples, types básicos, renderização de JSX

---

### **Exercício 02 - Props Intermediárias** 📊

Evolui para **componentes mais complexos** que lidam com listas, objetos e estruturas de dados.

**Componentes criados:**
- `Perfil` - Perfil de usuário com foto, nome e email
- `CardProduto` - Card de produto com preço e descrição
- `ListaUsuarios` - Lista renderizada de usuários (map)
- `Post` - Componente de post com título, autor e conteúdo
- `ListaComentarios` - Lista de comentários renderizados
- `CardComImagem` - Card com imagem, título e texto
- `TabelaSimples` - Tabela que recebe array de dados
- `Aluno` - Exibe dados de aluno com nota
- `Menu` - Menu dinâmico a partir de array de dados
- `Layout` - Componente de layout estruturado

**Conceitos:** Props complexas (objetos, arrays), renderização com `.map()`, desestruturação

---

### **Exercício 03 - Props Avançadas** 🚀

Implementa **conceitos avançados** como children, props genéricas, componentes dinâmicos e state management.

**Componentes criados:**
- `Card` - Componente com **children** (conteúdo interno)
- `ListaProdutos` - Lista genérica de produtos com props complexas
- `BotaoCustomizado` - Botão com props de customização (cor, tamanho)
- `Alerta` - Alerta dinâmico baseado em tipo (sucesso, erro, aviso)
- `TabelaGenerica` - Tabela genérica que aceita colunas e dados
- `Modal` - Modal com conteúdo e rodapé personalizáveis
- `Dashboard` - Dashboard com múltiplas seções
- `Formulario` - Formulário dinâmico gerado a partir de array de campos
- `ListaFiltrada` - Lista que filtra itens por categoria
- `PaginaDinamica` - Página inteira gerada a partir de configuração (tema, títulos, conteúdo)

**Conceitos:** Children, componentes genéricos, desestruturação avançada, props dinâmicas, composição

---

## 🎓 Progressão de Aprendizado

```
Exercício 01: Props Básicas
    ↓
    Entender como passar dados via props
    Renderizar componentes simples
    
Exercício 02: Props Intermediárias
    ↓
    Trabalhar com arrays e objetos
    Renderizar listas com .map()
    Desestruturação de props
    
Exercício 03: Props Avançadas
    ↓
    Children (conteúdo dentro de componentes)
    Componentes genéricos/reutilizáveis
    Props com estruturas complexas
    Dinâmica total (componentes gerados a partir de props)
```

---

## 🚀 Como Rodar

Cada exercício é um projeto **Vite + React** independente:

```bash
# Para o Exercício 01
cd exercicio01
npm install
npm run dev

# Para o Exercício 02
cd exercicio02
npm install
npm run dev

# Para o Exercício 03
cd exercicio03
npm install
npm run dev
```

---

## 💡 O que é Props?

**Props** (propriedades) são a forma de passar dados de um componente pai para um componente filho em React.

**Exemplo:**
```jsx
// Componente filho
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>
}

// Usando o componente (passando props)
<Saudacao nome="Guilherme" />
```

---

## 📌 Principais Conceitos Cobertos

| Exercício | Conceitos |
|-----------|-----------|
| **01** | Props básicas, JSX, componentes simples |
| **02** | Arrays, objetos, .map(), desestruturação |
| **03** | Children, componentes genéricos, props dinâmicas |

---

## 🎯 Objetivo

Estes exercícios prepararam você para:
- ✅ Entender o fluxo de dados com Props
- ✅ Criar componentes reutilizáveis
- ✅ Trabalhar com dados dinâmicos
- ✅ Estruturar aplicações React maiores
- ✅ Dominar conceitos fundamentais do React

---

**Criado com ❤️ em React | Exercícios de Props**
