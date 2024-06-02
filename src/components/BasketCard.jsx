import { MdDeleteOutline } from "react-icons/md";

import styles from "./BasketCard.module.css";
import { productTotalPrice, shortenText } from "../helpers/helper";

const BasketCard = ({ data, clickHandler }) => {
  const { title, image, quantity, price } = data;
  return (
    <article className={styles.basketCard}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        <p>${productTotalPrice(quantity, price)}</p>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE_ITEM", data)}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE_ITEM", data)}>+</button>
      </div>
    </article>
  );
};

export default BasketCard;
