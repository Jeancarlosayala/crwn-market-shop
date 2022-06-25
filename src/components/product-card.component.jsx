import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

import { Footer, ProductCardContainer } from '../styles/product-card.styles'

import Button, { BUTTON_TYPE_CLASSES } from './buttons.component';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product)


  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </Footer>

      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;