import { createContext, useState } from "react";

interface CoffeeCartContextType {
  updateTotal: (amount: number) => void;
  updateTotalValue: (amount: number) => void;
  total: number;
  totalValue: number;
}

interface Props {
  children: React.ReactNode;
}

export const CoffeeCartContext = createContext<CoffeeCartContextType>({
  updateTotal: () => {},
  updateTotalValue: () => {},
  total: 0,
  totalValue: 0,
});

export const CoffeeCartContextProvider: React.FC<Props> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);

  const [totalValue, setTotalValue] = useState<number>(0);

  const updateTotal = (amount: number) => {
    setTotal(total + amount);
  };

  const updateTotalValue = (amountValue: number) => {
    setTotalValue(totalValue + amountValue);
  };

  const contextValue = { updateTotal, total, updateTotalValue, totalValue };

  return (
    <CoffeeCartContext.Provider value={contextValue}>
      {children}
    </CoffeeCartContext.Provider>
  );
};
