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