// Página inicial com a lista de produtos (catálogo)

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Catálogo</h1>

      {/* Mostra cada produto usando o componente ProductCard */}
      <div className="product-list">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
