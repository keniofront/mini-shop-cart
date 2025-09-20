import { products } from "../data";
import ProductCard from "../components/ProductCard/ProductCard";
import style from "./CatalogPage.module.css";

export default function CatalogPage({ setPage, setSelectedId }) {
  return (
    <div className={`section ${style.section}`}>
      <div className={`container ${style.container}`}>
        <div className={style.catalogContainer}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetail={(id) => {
                setSelectedId(id);
                setPage("detalhes");
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
