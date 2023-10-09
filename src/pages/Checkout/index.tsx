import { useContext } from "react";
import { CoffeeCartContext } from "../../contexts/CoffeeCartContext";
import {
  CheckoutContainer,
  Form,
  FormContainerStats,
  Header,
  Input,
  PaymentOption,
  PaymentOptions,
  SelectedCoffees,
  SelectedCoffeesStats,
  SubmitButton,
  Title,
  TotalItems,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const newAddressFormValidationSchema = zod.object({
  rua: zod.string().min(1, "Informe a rua"),
  cep: zod.string().min(1, "Informe seu CEP"),
});

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export const Checkout = () => {
  const { totalValue } = useContext(CoffeeCartContext);

  const deliveryTax = Number(3.5).toFixed(2);

  const totalWithTaxes = totalValue + Number(deliveryTax);

  const { register, handleSubmit, watch, reset } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      rua: "",
      cep: "",
    },
  });

  const rua = watch("rua");
  const cep = watch("cep");

  const isSubmitDisabled = !rua || !cep;

  const handleCreateNewAddress = (data: NewAddressFormData, e: any) => {
    e.preventDefault();
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateNewAddress)}>
      <CheckoutContainer>
        <Title>Complete seu pedido</Title>
        <FormContainerStats className="addressContainer">
          <Header className="header">
            <MapPin />
            <div className="text">
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>
          <div className="inputContainer">
            <Input type="text" placeholder="CEP" {...register("cep")} />
            <Input type="text" placeholder="Rua" {...register("rua")} />
          </div>
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
      </CheckoutContainer>
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
          <SubmitButton disabled={isSubmitDisabled}>
            confirmar pedido
          </SubmitButton>
        </SelectedCoffeesStats>
      </SelectedCoffees>
    </Form>
  );
};
