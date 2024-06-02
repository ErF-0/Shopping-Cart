import { FaBasketShopping } from "react-icons/fa6";

import styles from "./EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <section className={styles.empty}>
      <div>
        <FaBasketShopping />
      </div>
      <h3>Empty Cart</h3>
    </section>
  );
};

export default EmptyCart;
