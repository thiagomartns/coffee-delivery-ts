import { useContext } from "react";
import { CoffeeCartContext } from "../../contexts/CoffeeCartContext";
import {
  CheckoutContainer,
  FormContainer,
  FormContainerStats,
  Header,
  PaymentOption,
  PaymentOptions,
  SelectedCoffees,
  SelectedCoffeesStats,
  Title,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";

export const Checkout = () => {
  const { totalValue } = useContext(CoffeeCartContext);

  const paymentTotalValue = totalValue.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  const deliveryTax = (3.5).toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });

  return (
    <CheckoutContainer>
      <FormContainer>
        <Title>Complete seu pedido</Title>
        <FormContainerStats className="addressContainer">
          <Header className="header">
            <MapPin />
            <div className="text">
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>
          <form action=""></form>
        </FormContainerStats>
        <FormContainerStats className="paymentContainer">
          <Header className="header">
            <CurrencyDollar />
            <div className="text">
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Header>
          <PaymentOptions className="options">
            <PaymentOption className="option">
              <CreditCard />
              <p>cartão de crédito</p>
            </PaymentOption>
            <PaymentOption className="option">
              <Bank />
              <p>cartão de débito</p>
            </PaymentOption>
            <PaymentOption className="option">
              <Money />
              <p>dinheiro</p>
            </PaymentOption>
          </PaymentOptions>
        </FormContainerStats>
      </FormContainer>
      <SelectedCoffees>
        <Title>Cafés Selecionados</Title>
        <SelectedCoffeesStats>
          <form action="">
            <div className="itemsSelected"></div>
            <div className="totalPayment">
              <div className="totalItems">
                <p>Total de itens</p>
                <p>{paymentTotalValue}</p>
              </div>
              <div className="delivery">
                <p>Entrega</p>
                <p>{deliveryTax}</p>
              </div>
              <div className="totalValueItems">
                <h3>Total</h3>
                <h3>{paymentTotalValue + deliveryTax}</h3>
              </div>
            </div>
          </form>
        </SelectedCoffeesStats>
      </SelectedCoffees>
    </CheckoutContainer>
  );
};
