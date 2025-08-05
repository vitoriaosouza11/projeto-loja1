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