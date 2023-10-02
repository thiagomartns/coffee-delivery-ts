import { ShoppingCart, MapPin } from 'phosphor-react'
import Logo from '../../../public/assets/img/Logo.svg'
import { HeaderContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div className="buttons">
        <div className="button-city">
          <MapPin size={20} className='icon' />
          <p>Porto Alegre, RS</p>
        </div>
        <div className="button-cart">
          <ShoppingCart weight='bold' size={24} className='icon' />
        </div>
      </div>
    </HeaderContainer>
  )
}