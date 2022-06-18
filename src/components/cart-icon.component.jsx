import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import '../styles/cart-icon.styles.scss'

import { CartContext } from '../context/cart.context'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, countItems } = useContext(CartContext)
  
  const toggle = () => setIsCartOpen(!isCartOpen)

  return(
    <div className='cart-icon-container' onClick={toggle} >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{countItems}</span>
    </div>
  )
}

export default CartIcon;