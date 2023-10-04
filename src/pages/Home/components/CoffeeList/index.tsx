
import { CoffeeListItems } from "./data/data"
import { CoffeListContainer, CoffeListContent } from "./styles"

export const CoffeList = () => {
  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        {CoffeeListItems.map((coffee) => (
          <div key={coffee.id} className="card">
            <img src={coffee.img} alt="" />
            <div className="badgeContainer">
              {coffee.tags.map((coffeTag) => (
                <div key={coffeTag} className="badge">
                  <h3>{coffeTag}</h3>
                </div>
              ))}
            </div>
            <h2>{coffee.title}</h2>
            <p>{coffee.info}</p>
            <div className="price-and-cart">
              <div className="price"><span>R$</span><h3>{coffee.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h3></div>
              <div className="counter"></div>
              <div className="cart"></div>
            </div>
          </div>
        ))}
      </CoffeListContent>
    </CoffeListContainer>
  )
}