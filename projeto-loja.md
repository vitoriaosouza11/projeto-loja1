# 📘 Guia de Criação do Projeto "Loja" com React + Vite

Repositório inicial: [https://github.com/3insteinDev/projeo-loja](https://github.com/3insteinDev/projeto-loja)

Documentação React: [https://react.dev/learn](https://react.dev/learn)

---

## ✅ 1. Criação de um novo repositório (GitHub)


```Git Hub
Com a sua conta no GitHub logada crie um novo repositório
nomeUsuario/projeto-loja

#Após o repositório criado clicque na opção Code/ clone e copie o endereço HTTPS
Exemplo: https://github.com/nomeUsuario/projeto-loja.git


# Acesse uma pasta no seu computador, onde deseja clonar
cd caminho/para/sua/pasta

# Digite o comando de clonar, inserindo o link copiado
git clone https://github.com/nomeUsuario/projeto-loja.git

# Acesse a pasta raiz do projeto clonado
cd projeto-loja

# Crie o projeto com Vite e template React dentro desta pasta
npm create vite@latest . -- --template react

# Instale as dependências
npm install

# Rode o projeto localmente
npm run dev
```

---

## ✅ 2. Limpar Projeto


### Apague
```
src/assets/react.svg
src/App.css
src/index.css
```

(Obs. Commit initial)


## ✅ 3. Conteúdo dos arquivos


### Editar src/main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Estrutura inicial para o projeto de loja
```estrutura
src/
├── components/
│   ├── Banner.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Carrinho.jsx
│   └── Produtos.jsx
├── App.jsx
├── main.jsx
└── styles.css 
```

```jsx
// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import './styles.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

```

```jsx
//Navbar.jsx

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1>Minha Loja</h1>
      <ul>
        <li><Link to="/">Produtos</Link></li>
        <li><Link to="/carrinho">Carrinho</Link></li>
      </ul>
    </nav>
  )
}

```

```jsx
//Banner.jsx

export default function Banner() {
  return (
    <section className="banner">
      <h2>Bem-vindo à Loja</h2>
      <p>Ofertas especiais e novidades aqui!</p>
    </section>
  )
}

```

```jsx
//Footer.jsx

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Minha Loja. Todos os direitos reservados.</p>
    </footer>
  )
}

```

```jsx
//Produtos.jsx

import { useState, useEffect } from 'react'

export default function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    setProdutos([
      { id: 1, nome: 'Camiseta', preco: 50 },
      { id: 2, nome: 'Calça', preco: 120 },
      { id: 3, nome: 'Tênis', preco: 200 }
    ])
  }, [])

  return (
    <main>
      <h2>Produtos</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </main>
  )
}

```

```jsx
//Carrinho.jsx

export default function Carrinho() {
  return (
    <main>
      <h2>Carrinho de Compras</h2>
      <p>Ainda não há produtos no carrinho.</p>
    </main>
  )
}

```

```css
/* style.css */

/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

nav {
  background-color: #0077cc;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

nav h1 {
  font-size: 1.5rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

nav ul li a {
  color: white;
  font-weight: bold;
  padding: 0.5rem;
}

nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}

section.banner {
  background: url('https://via.placeholder.com/1200x300') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 4rem 1rem;
}

section.banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

section.banner p {
  font-size: 1.2rem;
}

main {
  padding: 2rem 1rem;
  max-width: 960px;
  margin: auto;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

/* Responsivo */
@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }

  section.banner h2 {
    font-size: 1.5rem;
  }
}

```

---

## ✅ 4. Instalar o React Router

```bash
# instalar
npm install react-router-dom
```

(Observação: segundo commit)


## ✅ 5. Adicionar controle de estado
1. Lógica com useState
Para adicionar produtos ao carrinho, controlando o estado do carrinho no componente principal (App.jsx).

2. Uso de props
Vamos passar produtos do componente App → Produtos, e o método adicionarAoCarrinho como uma prop também.

# Atualizar os arquivos:
```jsx
//App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import './styles.css'
import { useState, useEffect } from 'react'

function App() {
  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([])

  // Simula um "fetch"
  useEffect(() => {
    setProdutos([
      { id: 1, nome: 'Camiseta', preco: 50 },
      { id: 2, nome: 'Calça', preco: 120 },
      { id: 3, nome: 'Tênis', preco: 200 }
    ])
  }, [])

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto])
  }

  return (
    <Router>
      <Navbar />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <Produtos
              produtos={produtos}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          }
        />
        <Route
          path="/carrinho"
          element={<Carrinho carrinho={carrinho} />}
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
```

```jsx
//Produtos.jsx

export default function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <main>
      <h2>Produtos</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id} style={{ marginBottom: '1rem' }}>
            {produto.nome} - R$ {produto.preco}
            <br />
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

```

```jsx
//Carrinho.jsx

export default function Carrinho({ carrinho }) {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <main>
      <h2>Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome} - R$ {item.preco}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> R$ {total}</p>
        </>
      )}
    </main>
  )
}

```

## ✅ 5. Adicionar contador ao carrinho e botão remover do carrinho

# Atualizar os arquivos:
```jsx
//App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Produtos from './pages/Produtos'
import Carrinho from './pages/Carrinho'
import './styles.css'
import { useState, useEffect } from 'react'

function App() {
  const [produtos, setProdutos] = useState([])
  const [carrinho, setCarrinho] = useState([])

  useEffect(() => {
    setProdutos([
      { id: 1, nome: 'Camiseta', preco: 50 },
      { id: 2, nome: 'Calça', preco: 120 },
      { id: 3, nome: 'Tênis', preco: 200 }
    ])
  }, [])

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prev) => [...prev, produto])
  }

  const removerDoCarrinho = (indexParaRemover) => {
    setCarrinho((prev) => prev.filter((_, index) => index !== indexParaRemover))
  }

  return (
    <Router>
      <Navbar carrinho={carrinho} />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <Produtos
              produtos={produtos}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          }
        />
        <Route
          path="/carrinho"
          element={
            <Carrinho
              carrinho={carrinho}
              removerDoCarrinho={removerDoCarrinho}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
```

```jsx
//Navbar.jsx

import { Link } from 'react-router-dom'

export default function Navbar({ carrinho }) {
  return (
    <nav>
      <h1>Minha Loja</h1>
      <ul>
        <li><Link to="/">Produtos</Link></li>
        <li>
          <Link to="/carrinho">
            Carrinho ({carrinho.length})
          </Link>
        </li>
      </ul>
    </nav>
  )
}

```

```jsx
//Carrinho.jsx

export default function Carrinho({ carrinho, removerDoCarrinho }) {
  const total = carrinho.reduce((soma, item) => soma + item.preco, 0)

  return (
    <main>
      <h2>Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {carrinho.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
                {item.nome} - R$ {item.preco}
                <br />
                <button onClick={() => removerDoCarrinho(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> R$ {total}</p>
        </>
      )}
    </main>
  )
}

```




