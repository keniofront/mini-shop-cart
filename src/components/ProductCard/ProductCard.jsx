import styles from "./ProductCard.module.css";
import { FaSearchPlus } from "react-icons/fa";

export default function ProductCard({ product, onDetail }) {
  return (
    <div className={styles.card} style={{ backgroundColor: product.color }}>
      <img src={product.image} alt={product.title} />
      <div className={styles.descriContainer}>
        <div className={styles.descriContent}>
          <h3>{product.title}</h3>
          <p>R$ {product.price.toFixed(2)}</p>
        </div>
        <button onClick={() => onDetail(product.id)} className={styles.btnDescrip}>
          <FaSearchPlus className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
