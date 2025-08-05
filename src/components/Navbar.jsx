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