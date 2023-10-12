import { defaultTheme } from "../../../../styles/themes/default";
import {
  HeroContainer,
  ImageContainer,
  ListContainer,
  TextContainer,
} from "./styles";
import HeroImage from "/assets/img/Imagem.png";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

const iconSize = 20;

const ListItems = [
  {
    id: 1,
    message: "Compra simples e segura",
    icon: <ShoppingCart className="icon" size={iconSize} />,
    bgColor: defaultTheme.colors["yellow-dark"],
  },
  {
    id: 2,
    message: "Embalagem mantém o café intacto",
    icon: <Package className="icon" size={iconSize} />,
    bgColor: defaultTheme.colors["base-text"],
  },
  {
    id: 3,
    message: "Entrega rápida e rastreada",
    icon: <Timer className="icon" size={iconSize} />,
    bgColor: defaultTheme.colors.yellow,
  },
  {
    id: 4,
    message: "O café chega fresquinho até você",
    icon: <Coffee className="icon" size={iconSize} />,
    bgColor: defaultTheme.colors.purple,
  },
];

export const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ListContainer>
          {ListItems.map(({ icon, message, bgColor, id }) => (
            <li key={id}>
              <div
                className="icon-wrapper"
                style={{
                  backgroundColor: bgColor,
                }}
              >
                {icon}
              </div>
              <p>{message}</p>
            </li>
          ))}
        </ListContainer>
      </TextContainer>
      <ImageContainer>
        <img src={HeroImage} alt="" />
      </ImageContainer>
    </HeroContainer>
  );
};
