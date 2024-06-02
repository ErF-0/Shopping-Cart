import { useEffect, useState, createContext, useContext } from "react";

import api from "../services/config";
import { useLocalStorage } from "./LocalStorageContext";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await api.get("/products"));
    };
    fetchProducts();
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useProductDetails = (id) => {
  const products = useContext(ProductsContext);
  const result = products.find((item) => item.id === id);
  return result;
};

export { useProducts, useProductDetails };
