import { createContext, useState } from "react";

interface CoffeeCartContextType {
  updateTotal: (amount: number) => void;
  total: number;
}

interface Props {
  children: React.ReactNode;
}

export const CoffeeCartContext = createContext<CoffeeCartContextType>({
  updateTotal: () => {},
  total: 0,
});

export const CoffeeCartContextProvider: React.FC<Props> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);

  const updateTotal = (amount: number) => {
    setTotal(total + amount);
  };

  const contextValue = { updateTotal, total };

  return (
    <CoffeeCartContext.Provider value={contextValue}>
      {children}
    </CoffeeCartContext.Provider>
  );
};
