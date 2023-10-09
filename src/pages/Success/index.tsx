import { SuccessContainer, SuccessParag, SuccessTitle } from "./styles";

export const Success = () => {
  return (
    <SuccessContainer>
      <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
      <SuccessParag>
        Agora é só aguardar que logo o café chegará até você
      </SuccessParag>
      <div className="successCard">Entrega</div>
    </SuccessContainer>
  );
};
