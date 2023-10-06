import { CoffeeItem } from "./components/CoffeeItem";
import { CoffeeListItems } from "./data/data";
import { CoffeListContainer, CoffeListContent } from "./styles";

export const CoffeList = () => {
  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        {CoffeeListItems.map((coffee) => (
          <CoffeeItem data={coffee} />
        ))}
      </CoffeListContent>
    </CoffeListContainer>
  );
};
