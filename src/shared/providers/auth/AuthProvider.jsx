import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const values = { user: null };

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};
