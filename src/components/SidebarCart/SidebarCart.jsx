import styles from "./SidebarCart.module.css";
import { useCart } from "../../context/CartContext";
import { IoTrash } from "react-icons/io5";

export default function SidebarCart() {
  const { cart, totalItems, totalPrice, isOpen, setIsOpen, removeFromCart } = useCart();

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.closeCont}>
        <button className={styles.close} onClick={() => setIsOpen(false)}>
          X
        </button>
      </div>
      <h2 className={styles.titleText}>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <div className={styles.showProductsCont}>
          <div className={styles.itensContainer}>
            {cart.map((item) => (
              <div key={item.id} className={styles.item} style={{ backgroundColor: item.color }}>
                <img src={item.image} alt={item.title} />
                <div className={styles.itemDesc}>
                  <h4>{item.title}</h4>
                  <p>Quantidade: {item.quantity}</p>
                </div>
                <a className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                  <IoTrash className={styles.icon} />
                </a>
              </div>
            ))}
          </div>
          <div className={styles.payTotalCont}>
            <p>Total de itens: {totalItems}</p>
            <p>Total a pagar: R$ {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
