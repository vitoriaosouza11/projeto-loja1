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