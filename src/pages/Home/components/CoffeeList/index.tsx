import { CoffeeItem } from "./components/CoffeeItem";
import { CoffeeListItems } from "./data/data";
import { CoffeListContainer, CoffeListContent } from "./styles";
import { useState } from "react";

export const CoffeList = () => {
  const [total, setTotal] = useState<number>(0);

  const updateTotal = (amount: number) => {
    setTotal(total + amount);
  };

  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        {CoffeeListItems.map((coffee) => (
          <CoffeeItem updateTotal={updateTotal} data={coffee} key={coffee.id} />
        ))}
      </CoffeListContent>
    </CoffeListContainer>
  );
};
