import { createContext } from "react";

interface Props {
  children: React.ReactNode;
}

export const CoffeeCartContext = createContext({});

export const CoffeeCartContextProvider: React.FC<Props> = ({ children }) => {
  const contextValue = {};

  return (
    <CoffeeCartContext.Provider value={contextValue}>
      {children}
    </CoffeeCartContext.Provider>
  );
};
