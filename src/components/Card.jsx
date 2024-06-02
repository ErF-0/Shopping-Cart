import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css";
import { productQuantity, shortenText } from "../helpers/helper";
import { useCart } from "../context/CartContext";
const Card = ({ data }) => {
  const { id, image, title, price } = data;
  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <article className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>${price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE_ITEM")}>-</button>
          )}

          {!!quantity && <span>{quantity}</span>}

          {quantity ? (
            <button onClick={() => clickHandler("INCREASE_ITEM")}>+</button>
          ) : (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
