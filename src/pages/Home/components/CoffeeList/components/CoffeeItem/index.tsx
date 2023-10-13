import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState, useContext } from "react";
import { Card } from "./styles";
import {
  CoffeeCartContext,
  CoffeeData,
} from "../../../../../../contexts/CoffeeCartContext";
import { useNavigate } from "react-router-dom";
interface CoffeeItemProps {
  data: CoffeeData;
}

export const CoffeeItem = ({ data }: CoffeeItemProps) => {
  const [count, setCount] = useState<number>(0);

  const { updateTotal, updateTotalValue, setCoffeesBought } =
    useContext(CoffeeCartContext);

  const navigate = useNavigate();

  const handleNavigateCart = () => {
    navigate("/checkout");
  };

  const handleSum = () => {
    setCount(count + 1);
    updateTotal(1);
    updateTotalValue(data.price);
    setCoffeesBought((prevCoffees) => [...prevCoffees, data]);
  };

  const handleMinus = () => {
    setCount(count - 1);
    updateTotal(-1);
    updateTotalValue(-data.price);
    setCoffeesBought((prevCoffees) => {
      return prevCoffees.filter((coffee) => coffee.id !== data.id);
    });
  };

  return (
    <Card key={data.id} className="card">
      <img src={data.img} alt="" />
      <div className="badgeContainer">
        {data.tags.map((coffeTag) => (
          <div key={coffeTag} className="badge">
            <h3>{coffeTag}</h3>
          </div>
        ))}
      </div>
      <h2>{data.title}</h2>
      <p>{data.info}</p>
      <div className="price-and-cart">
        <div className="price">
          <span>R$</span>
          <h3>
            {data.price.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </h3>
        </div>
        <div className="counter">
          <button onClick={handleMinus}>
            <Minus />
          </button>
          <span>{count}</span>
          <button onClick={handleSum}>
            <Plus />
          </button>
        </div>
        <div className="cart">
          <ShoppingCart onClick={handleNavigateCart} size={20} color="white" />
        </div>
      </div>
    </Card>
  );
};
