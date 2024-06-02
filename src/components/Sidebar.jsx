import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helpers/helper";
import { categories } from "../constants/categories";

import styles from "./Sidebar.module.css";

const Sidebar = ({ query, setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((prev) => createQueryObject(prev, { category }));
  };
  return (
    <aside className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
