import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { useNavigate } from 'react-router-dom' 
import { CartDropdownContainer, CartItems, EmptyMessage } from '../styles/cart-dropdown.styles'

import Button from './buttons.component'
import CartItem from './cart-item.component';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  } 

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? 
          (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) :
          <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler} buttonType='neumorphism'>GO TO CHECK</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown;