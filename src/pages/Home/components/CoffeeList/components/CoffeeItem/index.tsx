import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Card } from "./styles";

type UpdateTotalFunction = (amount: number) => void;

interface CoffeeData {
  id: number;
  img: string;
  title: string;
  tags: string[];
  info: string;
  price: number;
}

interface CoffeeItemProps {
  data: CoffeeData;
  updateTotal: UpdateTotalFunction;
}

export const CoffeeItem = ({ data, updateTotal }: CoffeeItemProps) => {
  const [count, setCount] = useState<number>(0);

  const handleSum = () => {
    setCount(count + 1);
    updateTotal(1);
  };

  const handleMinus = () => {
    setCount(count - 1);
    updateTotal(-1);
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
          <ShoppingCart size={20} color="white" />
        </div>
      </div>
    </Card>
  );
};
