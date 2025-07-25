// Página de detalhes de um produto individual

import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  // Pega o ID da URL
  const { id } = useParams();
  // Encontra o produto correspondente
  const product = products.find((p) => p.id === Number(id));

  // Pega a função para adicionar ao carrinho
  const { addToCart } = useCart();

  // Se o produto não foi encontrado, mostra mensagem
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>

      {/* Botão para adicionar ao carrinho */}
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
}
