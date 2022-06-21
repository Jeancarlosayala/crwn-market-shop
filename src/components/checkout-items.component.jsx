import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import '../styles/checkout-items.styles.scss'

const CheckOutItem = ({ CheckOutItems }) => {
  const { name, imageUrl, price, quantity } = CheckOutItems

  const { deleteItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext)
  const deleteItemHandler = () => deleteItemToCart(CheckOutItems)
  const addItemHandler = () => addItemToCart(CheckOutItems)
  const removeItemHandler = () => removeItemToCart(CheckOutItems)

  return (
    <div className="checkout-item-container">

      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      
      <span className="price">{price}</span>
      <span className="remove-button" onClick={deleteItemHandler}>&#10005;</span>
    </div>
  )
}

export default CheckOutItem;