import { useContext } from "react";
import {
  SelectedCoffeesStats,
  SelectedCoffees,
  Title,
  TotalItems,
  SubmitButton,
} from "./styles";
import { CoffeeCartContext } from "../../../../contexts/CoffeeCartContext";

interface SelectedCoffeesProps {
  isSubmitDisabled: boolean;
}

export const SelectedCoffeesContainer = ({
  isSubmitDisabled,
}: SelectedCoffeesProps) => {
  const { totalValue, coffeesBought } = useContext(CoffeeCartContext);

  const deliveryTax = 3.5;

  const totalWithTaxes = totalValue + Number(deliveryTax);

  return (
    <SelectedCoffees>
      <Title>Cafés Selecionados</Title>
      <SelectedCoffeesStats>
        <div className="itemsSelected">
          {coffeesBought.map((coffeeItemBought) => (
            <div className="">
              <img src={coffeeItemBought.img} alt="" />
            </div>
          ))}
        </div>
        <div className="totalPayment">
          <TotalItems className="totalItems">
            <p>Total de itens</p>
            <p>
              R${" "}
              {totalValue.toLocaleString("pt-br", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}
            </p>
          </TotalItems>
          <TotalItems className="totalItems">
            <p>Entrega</p>
            <p>
              R${" "}
              {deliveryTax.toLocaleString("pt-br", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}
            </p>
          </TotalItems>
          <TotalItems className="totalItems">
            <h3>Total</h3>
            <h3>
              R${" "}
              {totalWithTaxes.toLocaleString("pt-br", {
                style: "decimal",
                minimumFractionDigits: 2,
              })}
            </h3>
          </TotalItems>
        </div>
        <SubmitButton disabled={isSubmitDisabled}>
          confirmar pedido
        </SubmitButton>
      </SelectedCoffeesStats>
    </SelectedCoffees>
  );
};
