import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Se o carrinho estiver vazio, mostra uma mensagem
  if (cart.length === 0) return <p>Carrinho vazio.</p>;

  // Soma total de itens (quantidades)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Soma total de valor (preço × quantidade)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Seu Carrinho</h1>

      {/* Exibe os totais */}
      <p>Total de itens: {totalItems}</p>
      <p>Total a pagar: R$ {totalPrice.toFixed(2)}</p>

      {/* Lista dos produtos no carrinho */}
      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} — R$ {item.price.toFixed(2)}
          </p>

          {/* Campo para alterar a quantidade */}
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            min="1"
          />

          {/* Botão para remover o item */}
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}
