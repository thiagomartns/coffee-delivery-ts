import { useContext } from "react";
import { SuccessContainer, SuccessParag, SuccessTitle } from "./styles";
import { UserInfoContext } from "../../contexts/UserInfoContext";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import SuccessImg from "/assets/img/Illustration.png";

export const Success = () => {
  const { userAddress, selectedPaymentMethod } = useContext(UserInfoContext);

  const firstUserAddress = userAddress.length > 0 ? userAddress[0] : null;

  return (
    <SuccessContainer>
      <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
      <SuccessParag>
        Agora é só aguardar que logo o café chegará até você
      </SuccessParag>
      <div className="successContent">
        {firstUserAddress ? (
          <div className="successCard">
            <div className="itemContainer">
              <div className="iconContainer">
                <MapPin size={20} />
              </div>
              <div className="text">
                <p>
                  Entrega em{" "}
                  <span>
                    {firstUserAddress.rua}, {firstUserAddress.numero}
                  </span>
                </p>
                <p>
                  {firstUserAddress.bairro} - {firstUserAddress.cidade},{" "}
                  {firstUserAddress.estado}
                </p>
              </div>
            </div>
            <div className="itemContainer">
              <div className="iconContainer">
                <Clock size={20} />
              </div>
              <div className="text">
                <p>Previsão de entrega</p>
                <span>20-30 minutos</span>
              </div>
            </div>
            <div className="itemContainer">
              <div className="iconContainer">
                <CurrencyDollar size={20} />
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
        <img src={SuccessImg} alt="" />
      </div>
    </SuccessContainer>
  );
};
