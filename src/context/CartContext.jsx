// Este é o contexto do carrinho de compras.
// Usamos Context API para compartilhar os dados do carrinho entre várias páginas.

import { createContext, useContext, useState } from "react";

// Cria o contexto
const CartContext = createContext();

// Componente que "fornece" o carrinho para o app todo
export function CartProvider({ children }) {
  // Estado para armazenar os itens do carrinho
  const [cart, setCart] = useState([]);

  // Função para adicionar produto ao carrinho
  const addToCart = (product) => {
    setCart((prev) => {
      // Se o produto já está no carrinho, aumenta a quantidade
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      // Se não está, adiciona com quantidade 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remover produto do carrinho
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // Atualizar a quantidade de um item
  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, qty) } : p
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para acessar o contexto facilmente nos componentes
export const useCart = () => useContext(CartContext);
