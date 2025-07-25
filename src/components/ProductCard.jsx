// Cartão individual de produto mostrado no catálogo

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>R$ {product.price.toFixed(2)}</p>
      {/* Link para a página de detalhes do produto */}
      <Link to={`/product/${product.id}`}>Ver detalhes</Link>
    </div>
  );
}
