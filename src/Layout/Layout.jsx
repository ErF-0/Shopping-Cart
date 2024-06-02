import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">TrendyShop</Link>

        <div>
          <Link to="/checkout">
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>
          Developed with 💗 by{" "}
          <a href="https://github.com/ErF-0" rel="noreferrer" target="_blank">
            ERFaN
          </a>{" "}
        </p>
      </footer>
    </>
  );
};

export default Layout;
