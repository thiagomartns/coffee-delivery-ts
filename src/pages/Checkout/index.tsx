import { useContext } from "react";
import {
  CheckoutContainer,
  Form,
  FormContainerStats,
  Header,
  Input,
  PaymentOption,
  PaymentOptions,
  Title,
} from "./styles";
import { CurrencyDollar, MapPin } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { SelectedCoffeesContainer } from "./components/SelectedCoffees";

const newAddressFormValidationSchema = zod.object({
  rua: zod.string().min(1, "Informe a rua"),
  cep: zod.string().min(1, "Informe seu CEP"),
  numero: zod.string().min(1, "Informe o número da sua residência"),
  bairro: zod.string().min(1, "Informe o seu bairro"),
  cidade: zod.string().min(1, "Informe a sua cidade"),
  estado: zod.string().min(1, "Informe o seu estado").max(2),
  // complemento: zod.string().min(1, "Informe a sua cidade").optional(),
});

type NewAddressFormData = zod.infer<typeof newAddressFormValidationSchema>;

export const Checkout = () => {
  const {
    paymentOptions,
    setUserAddress,
    setSelectedPaymentMethod,
    selectedPaymentMethod,
  } = useContext(UserInfoContext);

  const handlePaymentMethodChoice = (paymentMethod: string) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      rua: "",
      cep: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  });

  const rua = watch("rua");
  const cep = watch("cep");
  const numero = watch("numero");
  const bairro = watch("bairro");
  const cidade = watch("cidade");
  const estado = watch("estado");

  const isSubmitDisabled =
    !rua || !cep || !numero || !bairro || !cidade || !estado;

  const handleCreateNewAddress = (data: NewAddressFormData, e: any) => {
    e.preventDefault();
    const newAddress: NewAddressFormData = {
      rua: data.rua,
      cep: data.cep,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
    };
    setUserAddress((state) => [...state, newAddress]);
    navigate("/success");

    return newAddress;
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateNewAddress)}>
      <CheckoutContainer>
        <Title>Complete seu pedido</Title>
        <FormContainerStats className="addressContainer">
          <Header className="header">
            <MapPin size={20} />
            <div className="text">
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Header>
          <div className="inputContainer">
            <Input type="text" placeholder="CEP" {...register("cep")} />
            <Input type="text" placeholder="Rua" {...register("rua")} />
            <Input type="text" placeholder="Número" {...register("numero")} />
            {/* <Input type="text" placeholder="Complemento" {...register("rua")} /> */}
            <Input type="text" placeholder="Bairro" {...register("bairro")} />
            <Input type="text" placeholder="Cidade" {...register("cidade")} />
            <Input type="text" placeholder="Estado" {...register("estado")} />
          </div>
        </FormContainerStats>
        <FormContainerStats className="paymentContainer">
          <Header className="header">
            <CurrencyDollar size={20} />
            <div className="text">
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Header>
          <PaymentOptions>
            {paymentOptions.map((option) => (
              <PaymentOption
                type="button"
                value={option.paymentMethod}
                onClick={() => handlePaymentMethodChoice(option.paymentMethod)}
                key={option.id}
                className={
                  selectedPaymentMethod == option.paymentMethod ? "active" : ""
                }
              >
                {option.icon}
                <p>{option.paymentMethod}</p>
              </PaymentOption>
            ))}
          </PaymentOptions>
        </FormContainerStats>
      </CheckoutContainer>
      <SelectedCoffeesContainer isSubmitDisabled={isSubmitDisabled} />
    </Form>
  );
};
