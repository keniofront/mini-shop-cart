import styles from "./Footer.module.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <h3 className={styles.logoDesktop}>KENIO FRONT</h3>
        <h3 className={styles.logoMobile}>KENIO</h3>

        <div className={styles.buttons}>
          <div className={styles.btnCont}>
            <FaGithubSquare />
            <a href="https://github.com/keniofront" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </div>
          <div className={styles.btnCont}>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/keniofront/" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
