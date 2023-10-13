import { createContext, useState } from "react";

interface CoffeeCartContextType {
  updateTotal: (amount: number) => void;
  updateTotalValue: (amount: number) => void;
  total: number;
  totalValue: number;
  coffeesBought: CoffeeData[];
  setCoffeesBought: React.Dispatch<React.SetStateAction<CoffeeData[]>>;
}

interface Props {
  children: React.ReactNode;
}

export interface CoffeeData {
  id: number;
  img: string;
  title: string;
  tags: string[];
  info: string;
  price: number;
}

export const CoffeeCartContext = createContext<CoffeeCartContextType>({
  updateTotal: () => {},
  updateTotalValue: () => {},
  total: 0,
  totalValue: 0,
  coffeesBought: [],
  setCoffeesBought: () => {},
});

export const CoffeeCartContextProvider: React.FC<Props> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);

  const [coffeesBought, setCoffeesBought] = useState<CoffeeData[]>([]);

  const [totalValue, setTotalValue] = useState<number>(0);

  const updateTotal = (amount: number) => {
    setTotal(total + amount);
  };

  const updateTotalValue = (amountValue: number) => {
    setTotalValue(totalValue + amountValue);
  };

  const contextValue = {
    updateTotal,
    total,
    updateTotalValue,
    totalValue,
    coffeesBought,
    setCoffeesBought,
  };

  return (
    <CoffeeCartContext.Provider value={contextValue}>
      {children}
    </CoffeeCartContext.Provider>
  );
};
