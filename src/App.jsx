import { Navigate, Route, Routes } from "react-router-dom";
// context providers
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
//pages routes
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import NotFoundPage from "./pages/404";
//style
import "./App.css";
import Layout from "./Layout/Layout";
import LocalStorageProvider from "./context/LocalStorageContext";

function App() {
  return (
    <>
      <LocalStorageProvider>
        <CartProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
                <Route
                  index
                  path="/"
                  element={<Navigate to="/products" replace />}
                />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<DetailsPage />} />
                <Route path="/checkout" element={<CheckOutPage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </ProductsProvider>
        </CartProvider>
      </LocalStorageProvider>
    </>
  );
}

export default App;
