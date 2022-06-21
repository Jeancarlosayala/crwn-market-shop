import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { useNavigate } from 'react-router-dom' 
import '../styles/cart-dropdown.styles.scss'

import Button from './buttons.component'
import CartItem from './cart-item.component';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  } 

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button onClick={goToCheckoutHandler} buttonType='neumorphism'>GO TO CHECK</Button>
    </div>
  )
}

export default CartDropdown;