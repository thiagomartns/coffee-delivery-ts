import ExpTradicional from '/assets/img/coffees/Coffee.png'
import ExpAmericano from '/assets/img/coffees/ExpressoAmericano.png'
import ExpCremoso from '/assets/img/coffees/Type=Expresso Cremoso.png'
import ExpGelado from '/assets/img/coffees/Coffee (1).png'
import ComLeite from '/assets/img/coffees/Coffee (2).png'
import Latte from '/assets/img/coffees/Coffee (3).png'
import Capuccino from '/assets/img/coffees/Coffee (4).png'
import Macchiato from '/assets/img/coffees/Coffee (5).png'
import Mocaccino from '/assets/img/coffees/Coffee (6).png'
import ChocolateQuente from '/assets/img/coffees/Coffee (7).png'
import Cubano from '/assets/img/coffees/Coffee (8).png'
import Havaiano from '/assets/img/coffees/Coffee (9).png'
import Arabe from '/assets/img/coffees/Coffee (10).png'
import Irlandes from '/assets/img/coffees/Coffee (11).png'

interface CoffeeListProps {
  id: number;
  tags: string[];
  img: string;
  info: string;
  title: string;
  price: number;
}

export const CoffeeListItems: CoffeeListProps[] = [
  {
    id: 1,
    tags: ['tradicional'],
    img: ExpTradicional,
    info: 'O tradicional café feito com água quente e grãos moídos',
    title: 'expresso tradicional',
    price: 12.50
  },
  {
    id: 2,
    tags: ['tradicional'],
    img: ExpAmericano,
    info: 'Expresso diluído, menos intenso que o tradicional',
    title: 'expresso americano',
    price: 10.75
  },
  {
    id: 3,
    tags: ['tradicional'],
    img: ExpCremoso,
    info: 'Café expresso tradicional com espuma cremosa',
    title: 'expresso cremoso',
    price: 14.20
  },
  {
    id: 4,
    tags: ['tradicional', 'gelado'],
    img: ExpGelado,
    info: 'Café expresso tradicional com espuma cremosa',
    title: 'expresso gelado',
    price: 17.80
  },
  {
    id: 5,
    tags: ['tradicional', 'com leite'],
    img: ComLeite,
    info: 'Meio a meio de expresso tradicional com leite vaporizado',
    title: 'café com leite',
    price: 20.15
  },
  {
    id: 6,
    tags: ['tradicional', 'com leite'],
    img: Latte,
    info: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    title: 'latte',
    price: 18.90
  },
  {
    id: 7,
    tags: ['tradicional', 'com leite'],
    img: Capuccino,
    info: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    title: 'cappuccino',
    price: 15.75
  },
  {
    id: 8,
    tags: ['tradicional', 'com leite'],
    img: Macchiato,
    info: 'Café expresso misturado com um pouco de leite quente e espuma',
    title: 'macchiato',
    price: 13.60
  },
  {
    id: 9,
    tags: ['tradicional', 'com leite'],
    img: Mocaccino,
    info: 'Café expresso com calda de chocolate, pouco leite e espuma',
    title: 'mocaccino',
    price: 16.40
  },
  {
    id: 10,
    tags: ['especial', 'com leite'],
    img: ChocolateQuente,
    info: 'Bebida feita com chocolate dissolvido no leite quente e café',
    title: 'chocolate quente',
    price: 22.75
  },
  {
    id: 11,
    tags: ['especial', 'alcoolico', 'gelado'],
    img: Cubano,
    info: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    title: 'cubano',
    price: 25.30
  },
  {
    id: 12,
    tags: ['especial'],
    img: Havaiano,
    info: 'Bebida adocicada preparada com café e leite de coco',
    title: 'havaiano',
    price: 19.65
  },
  {
    id: 13,
    tags: ['especial'],
    img: Arabe,
    info: 'Bebida preparada com grãos de café árabe e especiarias',
    title: 'árabe',
    price: 11.85
  },
  {
    id: 14,
    tags: ['especial', 'alcoolico'],
    img: Irlandes,
    info: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    title: 'irlandês',
    price: 28.50
  },
];
