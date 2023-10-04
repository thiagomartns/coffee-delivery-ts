
import { CoffeListContainer, CoffeListContent } from "./styles"
import ExpTradicional from '/assets/img/Coffee.png'
import ExpAmericano from '/assets/img/ExpressoAmericano.png'

interface CoffeeListProps {
  id: number;
  tags: string | string[];
  img: string;
  info: string;
  title: string;
  price: number;
}

const CoffeeListItems: CoffeeListProps[] = [
  // falta acertar as imagens e adicionar mais alguns cafés
  // depois alocar os objetos em um Database, local ou tentar fb
  {
    id: 1,
    tags: 'tradicional',
    img: ExpTradicional,
    info: 'O tradicional café feito com água quente e grãos moídos',
    title: 'expresso tradicional',
    price: 9.9
  },
  {
    id: 2,
    tags: 'tradicional',
    img: ExpAmericano,
    info: 'Expresso diluído, menos intenso que o tradicional',
    title: 'expresso americano',
    price: 9.9
  },
  {
    id: 3,
    tags: 'tradicional',
    img: ExpAmericano,
    info: 'Café expresso tradicional com espuma cremosa',
    title: 'expresso cremoso',
    price: 9.9
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    img: ExpAmericano,
    info: 'Café expresso tradicional com espuma cremosa',
    title: 'expresso gelado',
    price: 9.9
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    img: ExpAmericano,
    info: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: 'cafe com leite',
    price: 9.9
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    img: ExpAmericano,
    info: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: 'latte',
    price: 9.9
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    img: ExpAmericano,
    info: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: 'capuccino',
    price: 9.9
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    img: ExpAmericano,
    info: 'Café expresso misturado com um pouco de leite quente e espuma',
    title: 'macchiato',
    price: 9.9
  },
  
]

export const CoffeList = () => {
  return (
    <CoffeListContainer>
      <h1>Nossos Cafés</h1>
      <CoffeListContent>
        {CoffeeListItems.map((coffee) => (
          <div key={coffee.id} className="card">
            <img src={coffee.img} alt="" />
            <div className="badgeContainer">
              {Array.isArray(coffee.tags) ? (
                coffee.tags.map((tag) => (
                  <div key={tag} className="badge">
                    <h3>{tag}</h3>
                  </div>
                ))
              ) : (
                <div className="badge">
                  <h3>{coffee.tags}</h3>
                </div>
              )}
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