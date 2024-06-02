import { createContext, useContext, useEffect, useState } from "react";

const LocalStorageContext = createContext();

const LocalStorageProvider = ({ children }) => {
  const [localStorageData, setLocalStorageData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || {}
  );

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(localStorageData));
  }, [localStorageData]);

  return (
    <LocalStorageContext.Provider
      value={{ localStorageData, setLocalStorageData }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

const useLocalStorage = () => {
  const { localStorageData, setLocalStorageData } =
    useContext(LocalStorageContext);
  return [localStorageData, setLocalStorageData];
};

export { useLocalStorage };
export default LocalStorageProvider;
