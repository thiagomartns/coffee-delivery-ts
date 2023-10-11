import { createContext } from "react";
import { Bank, CreditCard, Money } from "phosphor-react";

interface PaymentOption {
  id: number;
  icon: JSX.Element;
  paymentMethod: string;
}

interface UserInfoContextType {
  paymentOptions: PaymentOption[];
}

interface Props {
  children: React.ReactNode;
}

export const UserInfoContext = createContext<UserInfoContextType>({
  paymentOptions: [],
});

export const UserInfoContextProvider: React.FC<Props> = ({ children }) => {
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
    paymentOptions,
  };

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
