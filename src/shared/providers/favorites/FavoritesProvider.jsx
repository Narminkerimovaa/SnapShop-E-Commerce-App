import { createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const values = {};

  return (
    <FavoritesContext.Provider value={values}>{children}</FavoritesContext.Provider>
  );
};
