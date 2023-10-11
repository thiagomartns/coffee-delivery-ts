import { useContext } from "react";
import { SuccessContainer, SuccessParag, SuccessTitle } from "./styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";

export const Success = () => {
  const { userAddress, selectedPaymentMethod } = useContext(UserInfoContext);

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
            <div className="text">
              <p>
                Entrega em <span>{firstUserAddress.rua}</span>
              </p>
              <p>Leblon - Rio de Janeiro, RJ</p>
            </div>
          </div>
          <div className="itemContainer">
            <div className="iconContainer">
              <Clock />
            </div>
            <div className="text">
              <p>
                Previsão de entrega <span>{firstUserAddress.rua}</span>
              </p>
              <span>20-30 minutos</span>
            </div>
          </div>
          <div className="itemContainer">
            <div className="iconContainer">
              <CurrencyDollar />
            </div>
            <div className="text">
              <p>Pagamento na entrega</p>
              <span>
                {selectedPaymentMethod.charAt(0).toUpperCase() +
                  selectedPaymentMethod.slice(1)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>Erro!</div>
      )}
    </SuccessContainer>
  );
};
