import { useContext } from "react";
import { CoffeeCartContext } from "../../contexts/CoffeeCartContext";

export const Checkout = () => {
  const { totalValue } = useContext(CoffeeCartContext);

  return <div>{totalValue}</div>;
};
