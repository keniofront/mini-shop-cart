import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  return (
    <header>
      <nav>
        <Link to="/">Catálogo</Link> |{" "}
        <Link to="/cart">Carrinho ({cart.length})</Link>
      </nav>
    </header>
  );
}
