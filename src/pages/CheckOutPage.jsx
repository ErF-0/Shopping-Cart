import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import EmptyCart from "../components/EmptyCart";
import { useCart } from "../context/CartContext";

import styles from "./CheckOutPage.module.css";

const CheckOutPage = () => {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter) return <EmptyCart />;

  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />

      <section className={styles.products}>
        {state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item} clickHandler={clickHandler} />
        ))}
      </section>
    </div>
  );
};

export default CheckOutPage;
