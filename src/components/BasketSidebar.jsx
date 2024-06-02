import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSidebar.module.css";
const BasketSidebar = ({ state, clickHandler }) => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total Price:</p>
        <span>${state.totalPrice}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>Checkout</button>
    </aside>
  );
};

export default BasketSidebar;
