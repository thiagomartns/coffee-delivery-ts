import { CoffeListContainer, CoffeListContent } from "./styles"
import CoffeeImg from '/assets/img/Coffee.png'

export const CoffeList = () => {
  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        <div className="card">
          <img src={CoffeeImg} alt="" />
          <div className="badge">
            <h3>Tradicional</h3>
          </div>
          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <div className="price-and-cart">
            <div className="price"><span>R$</span><h3>9,90</h3></div>
            <div className="counter"></div>
            <div className="cart"></div>
          </div>
        </div>
      </CoffeListContent>
    </CoffeListContainer>
  )
}