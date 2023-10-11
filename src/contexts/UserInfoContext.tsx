import { createContext, useState } from "react";
import { Bank, CreditCard, Money } from "phosphor-react";

interface PaymentOption {
  id: number;
  icon: JSX.Element;
  paymentMethod: string;
}

interface UserInfoContextType {
  paymentOptions: PaymentOption[];
  userAddress: NewUserAddress[];
  selectedPaymentMethod: string;
  setSelectedPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
  setUserAddress: React.Dispatch<React.SetStateAction<NewUserAddress[]>>;
}

interface Props {
  children: React.ReactNode;
}

interface NewUserAddress {
  rua: string;
  cep: string;
}

export const UserInfoContext = createContext<UserInfoContextType>({
  paymentOptions: [],
  userAddress: [],
  setUserAddress: () => {},
  setSelectedPaymentMethod: () => {},
  selectedPaymentMethod: "",
});

export const UserInfoContextProvider: React.FC<Props> = ({ children }) => {
  const [userAddress, setUserAddress] = useState<NewUserAddress[]>([]);
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

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  const contextValue = {
    paymentOptions,
    setUserAddress,
    userAddress,
    setSelectedPaymentMethod,
    selectedPaymentMethod,
  };

  return (
    <UserInfoContext.Provider value={contextValue}>
      {children}
    </UserInfoContext.Provider>
  );
};
