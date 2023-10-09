import { createContext, useState } from "react";
import { Bank, CreditCard, Money } from "phosphor-react";

interface PaymentOption {
  id: number;
  icon: JSX.Element;
  paymentMethod: string;
}

interface CoffeeCartContextType {
  updateTotal: (amount: number) => void;
  updateTotalValue: (amount: number) => void;
  total: number;
  totalValue: number;
  paymentOptions: PaymentOption[];
}

interface Props {
  children: React.ReactNode;
}

export const CoffeeCartContext = createContext<CoffeeCartContextType>({
  updateTotal: () => {},
  updateTotalValue: () => {},
  total: 0,
  totalValue: 0,
  paymentOptions: [],
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

  const paymentOptions = [
    {
      id: 1,
      icon: <CreditCard />,
      paymentMethod: "cartão de crédito",
    },
    {
      id: 2,
      icon: <Bank />,
      paymentMethod: "cartão de débito",
    },
    {
      id: 3,
      icon: <Money />,
      paymentMethod: "dinheiro",
    },
  ];

  const contextValue = {
    updateTotal,
    total,
    updateTotalValue,
    totalValue,
    paymentOptions,
  };

  return (
    <CoffeeCartContext.Provider value={contextValue}>
      {children}
    </CoffeeCartContext.Provider>
  );
};
