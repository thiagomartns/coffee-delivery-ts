import { ShoppingCart, MapPin } from "phosphor-react";
import Logo from "../../../public/assets/img/Logo.svg";
import { HeaderContainer } from "./styles";
import { CoffeeCartContext } from "../../contexts/CoffeeCartContext";
import { useContext } from "react";

export const Header = () => {
  const { total, totalValue } = useContext(CoffeeCartContext);

  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div className="buttons">
        <h1>
          {totalValue.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </h1>
        <div className="button-city">
          <MapPin size={20} className="icon" />
          <p>Porto Alegre, RS</p>
        </div>
        <div className="button-cart">
          <div className="counter">
            <p>{total}</p>
          </div>
          <ShoppingCart weight="bold" size={24} className="icon" />
        </div>
      </div>
    </HeaderContainer>
  );
};
