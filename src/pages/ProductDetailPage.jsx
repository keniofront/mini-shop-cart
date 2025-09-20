import { products } from "../data";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import styles from "./ProductDetailPage.module.css";
import { IoCart } from "react-icons/io5";

export default function ProductDetailPage({ selectedId, setPage }) {
  const product = products.find((p) => p.id === selectedId);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imgCont} style={{ backgroundColor: product.color }}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.descCont}>
          <div className={styles.titleEpriceEDescCont}>
            <div className={styles.titleEpriceCont}>
              <h2>{product.title}</h2>
              <p>R$ {product.price.toFixed(2)}</p>
            </div>
            <p className={styles.descText}>{product.description}</p>
          </div>
          <div className={styles.qtdECartCont}>
            <div className={styles.qtdBtn}>
              <label>Qtd: </label>
              <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>
            <button onClick={() => addToCart(product, quantity)} className={styles.cartBtn}>
              <IoCart className={styles.icon} />
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
