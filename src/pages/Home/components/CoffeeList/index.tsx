import { CoffeListContainer, CoffeListContent } from "./styles"
import ExpTradicional from '/assets/img/Coffee.png'
import ExpAmericano from '/assets/img/ExpressoAmericano.png'

const CoffeeListItems = [
  {
    id: 1,
    tag: 'tradicional',
    img: ExpTradicional,
    info: 'O tradicional café feito com água quente e grãos moídos',
    title: 'expresso tradicional',
    price: 9.9
  },
  {
    id: 2,
    tag: 'tradicional',
    img: ExpAmericano,
    info: 'Expresso diluído, menos intenso que o tradicional',
    title: 'expresso americano',
    price: 9.9
  },
]

export const CoffeList = () => {
  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        {CoffeeListItems.map((coffee) => (
          <div className="card">
            <img src={coffee.img} alt="" />
            <div className="badge">
              <h3>{coffee.tag}</h3>
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