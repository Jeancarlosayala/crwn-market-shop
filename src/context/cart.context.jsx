import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const findItemExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if (findItemExist) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}



export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  countItems: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [countItems, setCountItems] = useState(0)


  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCountItems(newCartCount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, countItems }

  return (
    <CartContext.Provider value={value} > {children} </CartContext.Provider>
  )
}
