import { HeroContainer, ImageContainer, ListContainer, TextContainer } from "./styles";
import HeroImage from '/assets/img/Imagem.png';
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";


export const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <ListContainer>
          <li>
            <div className="icon-wrapper">
              <ShoppingCart className="icon" size={24} />
            </div>
            <p>Compra simples e segura</p>
          </li>
          <li>
            <div className="icon-wrapper">
              <Package className="icon" size={24} />
            </div>
            <p>Embalagem mantém o café intacto</p>
          </li>
          <li>
            <div className="icon-wrapper">
              <Timer className="icon" size={24} />
            </div>
            <p>Entrega rápida e rastreada</p>
          </li>
          <li>
            <div className="icon-wrapper">
              <Coffee className="icon" size={24} />
            </div>
            <p>Entrega rápida e rastreada</p>
          </li>
        </ListContainer>
      </TextContainer>
      <ImageContainer>
        <img src={HeroImage} alt="" />
      </ImageContainer>
    </HeroContainer>
  )
}