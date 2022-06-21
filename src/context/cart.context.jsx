import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const findItemExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if (findItemExist) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productRemove) => {
  const findItemExist = cartItems.find((cartItem) => cartItem.id === productRemove.id)

  if (findItemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productRemove.id)

  }

  return cartItems.map((cartItem) => cartItem.id === productRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}

const deleteCartItem = (cartItems, productDelete) => cartItems.filter((cartItem) => cartItem.id !== productDelete.id)


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemToCart: () => { },
  deleteItemToCart: () => { },
  countItems: 0,
  priceItems: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [countItems, setCountItems] = useState(0)
  const [priceItems, setPriceItems] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCountItems(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0)
    setPriceItems(newPrice)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemToCart = (productRemove) => {
    setCartItems(removeCartItem(cartItems, productRemove))
  }

  const deleteItemToCart = (productDelete) => {
    setCartItems(deleteCartItem(cartItems, productDelete))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    deleteItemToCart,
    cartItems,
    countItems,
    priceItems
  }

  return (
    <CartContext.Provider value={value} > {children} </CartContext.Provider>
  )
}
