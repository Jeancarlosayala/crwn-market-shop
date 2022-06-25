import { useContext } from 'react'
import {ShoppingIcon, CartIconContainer, ItemCount} from '../styles/cart-icon.styles'

import { CartContext } from '../context/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, countItems } = useContext(CartContext)
  
  const toggle = () => setIsCartOpen(!isCartOpen)

  return(
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{countItems}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;