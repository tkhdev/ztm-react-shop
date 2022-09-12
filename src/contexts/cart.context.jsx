import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const addItem = (items, itemToAdd) => {
  const foundItem = items.find((i) => i.id === itemToAdd.id);

  if (foundItem) {
    return items.map((i) =>
      i.id === itemToAdd.id ? { ...itemToAdd, quantity: i.quantity + 1 } : i
    );
  }

  return [...items, { ...itemToAdd, quantity: 1 }];
};

const removeItem = (items, itemToRemove) => {
  const foundItem = items.find((i) => i.id === itemToRemove.id);

  if (foundItem?.quantity === 1) {
    return items.filter((i) => i.id !== itemToRemove.id);
  }

  return items.map((i) =>
    i.id === itemToRemove.id ? { ...i, quantity: i.quantity - 1 } : i
  );
};

const clearItem = (items, itemToRemove) =>
  items.filter((i) => i.id !== itemToRemove.id);

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, item) => (total += item.quantity),
      0
    );
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (total, item) => (total += item.quantity * item.price),
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) =>
    setCartItems(addItem(cartItems, itemToAdd));
  const removeCartItem = (itemToRemove) =>
    setCartItems(removeItem(cartItems, itemToRemove));
  const clearItemFromCart = (itemToRemove) =>
    setCartItems(clearItem(cartItems, itemToRemove));

  const value = {
    cartIsOpen,
    setCartIsOpen,
    cartItems,
    addItemToCart,
    removeCartItem,
    clearItemFromCart,
    cartCount,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
