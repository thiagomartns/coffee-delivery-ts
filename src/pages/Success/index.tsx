import { useContext } from "react";
import { SuccessContainer, SuccessParag, SuccessTitle } from "./styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

export const Success = () => {
  const { userAddress } = useContext(UserInfoContext);

  const firstUserAddress = userAddress.length > 0 ? userAddress[0] : null;

  return (
    <SuccessContainer>
      <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
      <SuccessParag>
        Agora é só aguardar que logo o café chegará até você
      </SuccessParag>
      {firstUserAddress ? (
        <div className="successCard">
          <div className="itemContainer">
            <div className="iconContainer">
              <MapPin />
            </div>
            <p>
              Entrega em <span>{firstUserAddress.rua}</span>
            </p>
          </div>
          <div className="itemContainer">
            <div className="iconContainer">
              <Clock />
            </div>
            <p>
              Previsão de entrega <span>{firstUserAddress.rua}</span>
            </p>
          </div>
          <div className="itemContainer">
            <div className="iconContainer">
              <CurrencyDollar />
            </div>
            <p>
              Pagamento na entrega <span>{firstUserAddress.rua}</span>
            </p>
          </div>
        </div>
      ) : (
        <div>Erro!</div>
      )}
    </SuccessContainer>
  );
};
