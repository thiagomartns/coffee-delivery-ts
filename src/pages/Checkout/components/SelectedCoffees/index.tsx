import { useContext } from "react";
import {
  SelectedCoffeesStats,
  SelectedCoffees,
  Title,
  TotalItems,
  SubmitButton,
} from "./styles";
import { CoffeeCartContext } from "../../../../contexts/CoffeeCartContext";

export const SelectedCoffeesContainer = () => {
  const { totalValue } = useContext(CoffeeCartContext);

  const deliveryTax = Number(3.5).toFixed(2);

  const totalWithTaxes = totalValue + Number(deliveryTax);

  return (
    <SelectedCoffees>
      <Title>Cafés Selecionados</Title>
      <SelectedCoffeesStats>
        <div className="itemsSelected"></div>
        <div className="totalPayment">
          <TotalItems className="totalItems">
            <p>Total de itens</p>
            <p>R$ {totalValue.toFixed(2)}</p>
          </TotalItems>
          <TotalItems className="totalItems">
            <p>Entrega</p>
            <p>R$ {deliveryTax}</p>
          </TotalItems>
          <TotalItems className="totalItems">
            <h3>Total</h3>
            <h3>R$ {totalWithTaxes.toFixed(2)}</h3>
          </TotalItems>
        </div>
        <SubmitButton /*disabled={isSubmitDisabled}*/>
          confirmar pedido
        </SubmitButton>
      </SelectedCoffeesStats>
    </SelectedCoffees>
  );
};
