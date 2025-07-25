// Componente principal do app com as rotas

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Header from "./components/Header";

export default function App() {
  return (
    // Envolve toda a aplicação com o contexto do carrinho
    <CartProvider>
      {/* React Router para gerenciar navegação */}
      <Router>
        {/* Cabeçalho com os links de navegação */}
        <Header />

        {/* Definição das rotas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
