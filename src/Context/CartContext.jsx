import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
    // Add product to cart
  const addToCart = (brand) => {
    setCart((prev) => {
      const existingBrand = prev.find((item) => item.id === brand.id);

      // If product already exists, increase quantity
      if (existingBrand) {
        return prev.map((item) =>
          item.id === brand.id
            ? { ...item, quantity:  (Number(item.quantity) || 1) +1}
            : item
        );
      }

      // If product doesn't exist, add it with quantity 1
      return [...prev, { ...brand, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
 // update quantity for a selected gas.
 const updateQuantity = (id, change) => {
  setCart((prev) => 
    prev.map((brand) => {
      if (brand.id !== id)return brand;
      const newQuantity = 
      (Number(brand.quantity) || 1) + change;
      return{...brand, quantity: newQuantity};
    
    }
    )
   .filter((brand) => Number(brand.quantity) > 0)
  );
 };
  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart , increaseQuantity, decreaseQuantity, updateQuantity}}>
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
