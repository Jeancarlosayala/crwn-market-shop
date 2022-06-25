import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import CheckOutItem from "../components/checkout-items.component";

import { CheckOutHeader, CheckoutContainer, HeaderBlock, Total } from '../styles/checkout.styles'

const CheckOut = () => {

  const { cartItems, priceItems } = useContext(CartContext)

  return (
    <CheckoutContainer>

      <CheckOutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>

      {
        cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} CheckOutItems={cartItem} />)
      }

      <Total>Total: ${priceItems}</Total>
    </CheckoutContainer>
  )
}

export default CheckOut;