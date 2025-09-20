
import { useState } from "react";
import Header from "./components/Header/Header";
import SidebarCart from "./components/SidebarCart/SidebarCart";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Footer from '../src/components/Footer/Footer'

export default function App() {
  const [page, setPage] = useState("catalogo");
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <Header setPage={setPage} />
      {page === "catalogo" && <CatalogPage setPage={setPage} setSelectedId={setSelectedId} />}
      {page === "detalhes" && <ProductDetailPage selectedId={selectedId} setPage={setPage} />}
      <SidebarCart />
      <Footer />
    </>
  );
}
