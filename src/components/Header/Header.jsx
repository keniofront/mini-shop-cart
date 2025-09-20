import styles from "./Header.module.css";
import { IoCart, IoBagSharp } from "react-icons/io5";
import { useCart } from "../../context/CartContext";

export default function Header({ setPage }) {
  const { setIsOpen, totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.appLogo}>FRUITS STORE</h2>
        <div className={styles.buttons}>
          <div className={styles.btnCont}>
            <IoBagSharp className={styles.icon} />
            <a onClick={() => setPage("catalogo")}>Catálogo</a>
          </div>
          <div className={styles.btnCont}>
            <IoCart className={styles.icon} />
            <a onClick={() => setIsOpen(true)}>
              Carrinho <span className={styles.num}>{totalItems}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
