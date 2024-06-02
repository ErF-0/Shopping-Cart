import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import { useSearchParams } from "react-router-dom";
import {
  categoryFilter,
  getInitialQuery,
  searchFilter,
} from "../helpers/helper";

//components
import Card from "../components/Card";
import Loader from "../components/Loader";

//style
import styles from "./ProductsPage.module.css";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const products = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setFilteredProducts(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);
  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchFilter(products, query.search);
    finalProducts = categoryFilter(finalProducts, query.category);
    setFilteredProducts(finalProducts);
  }, [query]);
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <section className={styles.container}>
        <div className={styles.products}>
          {!filteredProducts.length && <Loader />}
          {filteredProducts.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </section>
    </>
  );
};

export default ProductsPage;
