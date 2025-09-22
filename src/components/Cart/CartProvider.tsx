// src/components/Cart/CartProvider.tsx
import React, { useState, type ReactNode } from "react";
import { CartContext, type CartItem } from "./CartContext";

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add one or multiple items to the cart
  const addToCart = (items: CartItem | CartItem[]) => {
    const itemsArray = Array.isArray(items) ? items : [items];

    setCart((prev) => {
      const updated = [...prev];

      itemsArray.forEach((item) => {
        // 🔑 Important: keep each file distinct
        // If you *want* identical items merged, keep the find logic.
        // If you want each upload to show separately, skip merging.
        updated.push({ ...item, id: item.id || crypto.randomUUID() });
      });

      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
