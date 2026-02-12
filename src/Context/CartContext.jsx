import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (brand) => {
    setCart(prev => [...prev, brand]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(brand => brand.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
