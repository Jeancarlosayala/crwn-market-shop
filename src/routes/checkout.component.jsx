import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import CheckOutItem from "../components/checkout-items.component";

import '../styles/checkout.styles.scss'

const CheckOut = () => {

  const { cartItems, priceItems } = useContext(CartContext)

  return (
    <div className="checkout-container">

      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} CheckOutItems={cartItem} />)
      }

      <span className="total">Total: ${priceItems}</span>
    </div>
  )
}

export default CheckOut;