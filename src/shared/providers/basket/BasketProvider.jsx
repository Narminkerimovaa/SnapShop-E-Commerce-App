import { createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const values = {};

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};
