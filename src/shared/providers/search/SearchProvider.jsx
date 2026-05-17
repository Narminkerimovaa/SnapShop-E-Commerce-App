import { createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const values = {};

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
