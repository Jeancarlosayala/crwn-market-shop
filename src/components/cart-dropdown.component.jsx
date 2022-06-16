import '../styles/cart-dropdown.styles.scss'
import Button from './buttons.component'

const CartDropdown = () => {
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button buttonType='neumorphism'>GO TO CHECK</Button>
    </div>
  )
}

export default CartDropdown;